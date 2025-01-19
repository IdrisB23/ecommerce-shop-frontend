import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.interface';
import { ImageService } from '../../../image/services/image.service';
import { CartService } from '../../../cart/services/cart.service';
import {MatCardModule} from '@angular/material/card';
import { AddToCartButtonComponent } from '../../../cart/components/add-to-cart-button/add-to-cart-button.component';

@Component({
  selector: 'app-product-card',
  imports: [MatCardModule, AddToCartButtonComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  @Input() imgDimension!: number;
  productImgSrc: string[] = [];
  defaultImage = 'https://t3.ftcdn.net/jpg/05/04/28/96/360_F_504289605_zehJiK0tCuZLP2MdfFBpcJdOVxKLnXg1.jpg';

  constructor(private imageService: ImageService, private cartService: CartService) {}

  ngOnInit(): void {
    this.product.images?.forEach((image, _) => {
      this.imageService.getImageById(image.id.toString()).subscribe({
        next: (blob) => {
          // Create a local URL from the Blob
          this.productImgSrc.push(URL.createObjectURL(blob));
        },
        error: (err) => {
          console.error('Error downloading image:', err);
        },
      });
    });
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
