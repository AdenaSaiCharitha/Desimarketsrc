import { Component,OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductsadService } from '../productsad.service';
import { Observable } from 'rxjs'; 

@Component({
  selector: 'app-productuser',
  templateUrl: './productuser.component.html',
  styleUrls: ['./productuser.component.css']
})
export class ProductuserComponent implements OnInit {

  Productsad : any;
    x: Products[]=[];
    allproducts : Observable<Products[]>;
    constructor(private productservice:ProductsadService){}
    
  ngOnInit(){
    
    this.allproducts = this.productservice.getAll(); 
    console.log(this.allproducts);;
  }
 }
  