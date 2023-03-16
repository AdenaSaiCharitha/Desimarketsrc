import { Component,OnInit} from '@angular/core';
import { Observable } from 'rxjs'; 
import { ActivatedRoute, Router } from '@angular/router';
import { Orders } from '../orders';
import { Users } from '../users';
import { OrdersService } from '../orders.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-userorderlist',
  templateUrl: './userorderlist.component.html',
  styleUrls: ['./userorderlist.component.css']
})
export class UserorderlistComponent implements OnInit{
  //Orders : any;
  id:number;
  ord :Orders;
  userId!: number;
  x: Orders[]=[];
  allOrders : Observable<Orders[]>;
  constructor(private orderservice:OrdersService , private route: ActivatedRoute,){}
  
ngOnInit(){
     var y = localStorage.getItem("User");
   if(y)this.userId=JSON.parse(y).userId;
  this.allOrders = this.orderservice. getordersbyuserid(this.userId); 
  console.log(this.allOrders);;
}
cancel(x:number){
   this.id= this.route.snapshot.params['id'];
        
    this.orderservice.find(this.id).subscribe((data: Orders)=>{
      this.ord = data;
    });
    console.log(this.ord);
    this.ord.status="Cancelled";
}


}
