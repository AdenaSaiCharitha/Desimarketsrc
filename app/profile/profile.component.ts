import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../users';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
     
  userId!: number;
  users!: Users;
    

  constructor(
  public userService: UsersService,
   private route: ActivatedRoute,
    private router: Router
   ) { }
 
  ngOnInit(): void {
   var x = localStorage.getItem("User");
   if(x)this.userId=JSON.parse(x).userId; 
   //this.userId = this.route.snapshot.params['userId'];
        
    this.userService.find(this.userId).subscribe((data: Users)=>{
      this.users = data;
    });
  }
    
}
