import { Component,OnInit } from '@angular/core';
import { ProductsadService } from '../productsad.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-createprod',
  templateUrl: './createprod.component.html',
  styleUrls: ['./createprod.component.css']
})
export class CreateprodComponent implements OnInit {
  form!: FormGroup;

  constructor(
    public productservice:ProductsadService,
    private router: Router
  ) { }
    
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required),
      quantityInStock: new FormControl('', Validators.required),
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    this.productservice.create(this.form.value).subscribe((res:any) => {
         console.log('Product created successfully!');
         //this.router.navigateByUrl('productsadmin');
    })
  }
}
