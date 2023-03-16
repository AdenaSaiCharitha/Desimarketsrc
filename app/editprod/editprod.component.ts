import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm,FormGroup, FormControl, Validators} from '@angular/forms';
import { ProductsadService } from '../productsad.service';
import { Products } from '../products';

@Component({
  selector: 'app-editprod',
  templateUrl: './editprod.component.html',
  styleUrls: ['./editprod.component.css']
})
export class EditprodComponent implements OnInit{
  
  productId!: number;
  product!: Products;
  id!:number;
  form!: FormGroup;
   constructor(
    public productservice:ProductsadService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['productId'];
	console.log(this.productId);
    this.productservice.find(this.productId).subscribe((data: Products)=>{
	this.product=data;
	console.log(data);
    });
  }

  submit(g:NgForm){
    console.log(g.value);
    this.productservice.update(this.productId, g.value).subscribe((res:any) => {
         console.log('product updated successfully!');
         this.router.navigateByUrl('/productsadmin');
    })
  }

}
