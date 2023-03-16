import { Component,OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductsadService } from '../productsad.service';
import { Observable } from 'rxjs'; 

@Component({
  selector: 'app-productsadmin',
  templateUrl: './productsadmin.component.html',
  styleUrls: ['./productsadmin.component.css']
})
export class ProductsadminComponent implements OnInit {

Productsad : any;
  x: Products[]=[];
  allproducts : Observable<Products[]>;
  constructor(private productservice:ProductsadService){}
  
ngOnInit(){
  
  this.allproducts = this.productservice.getAll(); 
  console.log(this.allproducts);;
}
  deleteproduct(id:number){
    this.productservice.delete(id).subscribe(res => {
         this.x = this.x.filter(item => item.productId!== id);
         console.log('Product deleted successfully!');
    })
  }

}
