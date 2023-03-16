import { Component, OnInit } from '@angular/core';
import { ProductsadService } from '../productsad.service';
import { Products } from '../products';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-viewprodadm',
  templateUrl: './viewprodadm.component.html',
  styleUrls: ['./viewprodadm.component.css']
})
export class ViewprodadmComponent implements OnInit {
     
  productId!: number;
  product!: Products;
    

  constructor(
  public productservice:ProductsadService,
   private route: ActivatedRoute,
    private router: Router
   ) { }
 
  ngOnInit(): void {
   this.productId= this.route.snapshot.params['productId'];
        
    this.productservice.find(this.productId).subscribe((data:Products)=>{
      this.product = data;
    });
  }
    
}
