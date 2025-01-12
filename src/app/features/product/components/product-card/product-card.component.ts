import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.interface';
import { ImageService } from '../../../image/services/image.service';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  @Input() imgDimension!: number;
  productImgSrc: string[] = [];
  defaultImage = 'https://t3.ftcdn.net/jpg/05/04/28/96/360_F_504289605_zehJiK0tCuZLP2MdfFBpcJdOVxKLnXg1.jpg';

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.product.images?.forEach((image, idx) => {
      this.imageService.getImageById(image.id.toString()).subscribe({
        next: (blob) => {
          // Create a local URL from the Blob
          this.productImgSrc[idx] = URL.createObjectURL(blob);
        },
        error: (err) => {
          console.error('Error downloading image:', err);
        },
      });
    });
  }

}
