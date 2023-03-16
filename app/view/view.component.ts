import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../users';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
     
  userId!: number;
  users!: Users;
    

  constructor(
  public userService: UsersService,
   private route: ActivatedRoute,
    private router: Router
   ) { }
 
  ngOnInit(): void {
   this.userId = this.route.snapshot.params['userId'];
        
    this.userService.find(this.userId).subscribe((data: Users)=>{
      this.users = data;
    });
  }
    
}
