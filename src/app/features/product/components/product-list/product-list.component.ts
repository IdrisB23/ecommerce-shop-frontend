import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.interface';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  allProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    console.log('Before fetching data, this.allProducts::', this.allProducts); // Initial empty array

    this.productService.getAllProducts().subscribe((response) => {
      console.log('Response from API:', response);
      // Update the products array with the data from the response
      this.allProducts = response.data;
      console.log('After fetching data, this.allProducts::', this.allProducts);
    });

    console.log('Immediately after subscribing, this.allProducts::', this.allProducts);
  }
}
