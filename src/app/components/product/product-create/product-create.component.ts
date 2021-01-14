import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService: ProductService,
    private router: Router) { }

  product: Product = {
    name : '',
    price : 0
  }

  ngOnInit(): void {
    
  }
  createProduct(): void {
    this.productService.createProduct(this.product).subscribe(() => {
      this.productService.showMessage('Produto salvo!')
      this.router.navigate(['/products'])
    })
  }
  cancel(): void {
    this.router.navigate(['/products'])
  }
}
