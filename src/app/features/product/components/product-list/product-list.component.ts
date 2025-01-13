import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.interface';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { AddToCartButtonComponent } from '../../../cart/components/add-to-cart-button/add-to-cart-button.component';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent, AddToCartButtonComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  allProducts: Product[] = [];

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {

    this.productService.getAllProducts().subscribe((response) => {
      console.log('Response from API:', response);
      this.allProducts = response.data;
      console.log('After fetching data, this.allProducts::', this.allProducts);
    });

    console.log('Immediately after subscribing, this.allProducts::', this.allProducts);
  }

  handleAddToCart(productId: number): void {
    this.cartService.addProductToCart(productId.toString()).subscribe({
      next: () => {
        alert('Item added to cart successfully!');
      },
      error: (err) => {
        console.error('Error adding to cart:', err);
      }
    });
  }
}
