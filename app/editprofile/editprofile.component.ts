import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../users';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit{
  userId!: number;
  users!: Users;


   constructor(
    public userservice: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
   var x = localStorage.getItem("User");
   if(x)this.userId=JSON.parse(x).userId; 
   //this.userId = this.route.snapshot.params['userId'];
        
    this.userservice.find(this.userId).subscribe((data: Users)=>{
      this.users = data;
    });

  }

  submit(g:NgForm){
    this.userservice.update(this.userId, g.value).subscribe((res:Users) => {  
         console.log('User updated successfully!');
         alert('User updated successfully!');
         this.router.navigateByUrl('');
    })
  }

}
