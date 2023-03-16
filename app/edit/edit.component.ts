import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../users';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  userId!: number;
  users!: Users;


   constructor(
    public userservice: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    //let cp=this.userservice.find((p)=>{return p.userId == this.userId});
    this.userservice.find(this.userId).subscribe((data: Users)=>{
      this.users = data;
     
});
 }
  submit(g:NgForm){
    console.log(g.value);
    this.userservice.update(this.userId, g.value).subscribe((res:Users) => { 
         console.log('User updated successfully!');
         this.router.navigateByUrl('/users');
    })
  }

}
