import { Component,OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs'; 
import { ActivatedRoute, Router } from '@angular/router';
import { Orders } from '../orders';
import { Users } from '../users';
import { OrdersService } from '../orders.service';
import { UsersService } from '../users.service';
import { ProductsadService } from '../productsad.service';
import { Products } from '../products';

@Component({
  selector: 'app-createorder',
  templateUrl: './createorder.component.html',
  styleUrls: ['./createorder.component.css']
})
export class CreateorderComponent implements OnInit{
  x:number;
id :number;
  order :Orders;
  userId!: number;
  users!: Users;
  productId!: number;
  product!: Products;
  form!: FormGroup;
  Loginval:boolean=false;
  
constructor(private orderservice:OrdersService,
 public userService: UsersService,
 public productservice:ProductsadService,
private route: ActivatedRoute,
private router: Router
){}

ngOnInit(): void {
    this.Loginval=localStorage.getItem("User")!=null ;
    if(!this.Loginval)
 {alert("Please login to order");
    window.location.href='';
}
   var x = localStorage.getItem("User");
   if(x)this.userId=JSON.parse(x).userId; 
   this.productId= this.route.snapshot.params['productId'];

    this.userService.find(this.userId).subscribe((data: Users)=>{
      this.users = data;
    });
       this.productservice.find(this.productId).subscribe((data:Products)=>{
      this.product = data;
    });
 
this.form = new FormGroup({
	userId: new FormControl('', [Validators.required]),
      productId: new FormControl('', [Validators.required]),
      quantity: new FormControl('', Validators.required),
      totalPrice: new FormControl('', Validators.required),
    });

}
 get f(){
    return this.form.controls;
  }

  submit(){
    this.orderservice.create(this.form.value).subscribe((res:any) => {
        this.order=res;
        debugger;
         console.log('Ordered successfully!');
         alert("Ordered successful");
    });
   this.x=this.order.id; 
   this.orderservice.find(this.x).subscribe((data: any)=>{
   this.order = data;
   console.log(this.order);
   this.order.totalPrice=this.product.price*this.order.quantity;
   console.log(this.order);});
   this.orderservice.update(this.x,this.order).subscribe((res:Orders) => {  
         this.router.navigateByUrl('usersorderlist');
         console.log('price updated');
    });


  }



}
