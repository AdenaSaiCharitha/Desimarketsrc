import { Component,OnInit} from '@angular/core';
import { Users } from '../users';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs'; 


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  Users : any;
  x: Users[]=[];
  allUsers : Observable<Users[]>;
  constructor(private userservice:UsersService){}
  
ngOnInit(){
  
  //this.userservice.getAll().subscribe((res:any)=>{
    //this.allUsers=res;
    //debugger;});
  this.allUsers = this.userservice.getAll(); 
  console.log(this.allUsers);;
}
  deleteUser(id:number){
    this.userservice.delete(id).subscribe(res => {
         this.x = this.x.filter(item => item.userId!== id);
         console.log('Post deleted successfully!');
    })
  }
}
