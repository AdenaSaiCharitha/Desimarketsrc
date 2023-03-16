import { Component,OnInit} from '@angular/core';
import { Observable } from 'rxjs'; 
import { Orders } from '../orders';
import { OrdersService } from '../orders.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orderslistadmin',
  templateUrl: './orderslistadmin.component.html',
  styleUrls: ['./orderslistadmin.component.css']
})
export class OrderslistadminComponent  implements OnInit{
     id:number;
order :Orders;
  x: Orders[]=[];
  allOrders : Observable<Orders[]>;
  constructor(private orderservice:OrdersService, private route: ActivatedRoute,private router: Router){}
  
ngOnInit(){
  
  //this.orderservice.getAll().subscribe((res:any)=>{
    //this.allUsers=res;
    //debugger;});
  this.allOrders = this.orderservice.getAll(); 
  console.log(this.allOrders);;
}
  deleteorder(id:number){
    this.orderservice.delete(id).subscribe(res => {
         this.x = this.x.filter(item => item.id!== id);
         console.log('Order deleted successfully!');
    })
  }
cancel(y:number){
   this.id=y;
   this.orderservice.find(this.id).subscribe((data: any)=>{
   this.order = data;
   this.order.status="Cancelled";
   console.log(this.order);});
    
   this.orderservice.update(this.id,this.order).subscribe((res:Orders) => {  
         console.log('order cancelled successfully!');
         this.router.navigateByUrl('adminorderlist');
    });

} 
delivered(y:number){
   this.id=y;
   this.orderservice.find(this.id).subscribe((data: any)=>{
   this.order = data;
   this.order.status="Delivered";
   console.log(this.order);});
    
   this.orderservice.update(this.id,this.order).subscribe((res:Orders) => {  
         console.log('order delivered successfully!');
	   alert("Order delivered");
         this.router.navigateByUrl('adminorderlist');
    });

} 

}
