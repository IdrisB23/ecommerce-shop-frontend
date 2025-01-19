import { Component, OnInit, HostListener } from '@angular/core';
import { Product } from '../../models/product.interface';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent, MatGridListModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  allProducts: Product[] = [];
  gridColumns: string = '1';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.updateGridColumns(window.innerWidth);
    // fetch all products from the backend
    this.productService.getAllProducts().subscribe((response) => {
      console.log('Response from API:', response);
      this.allProducts = response.data;
      console.log('After fetching data, this.allProducts::', this.allProducts);
    });

    console.log('Immediately after subscribing, this.allProducts::', this.allProducts);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateGridColumns(event.target.innerWidth);
  }

  private updateGridColumns(width: number) {
    if (width > 1300) {
      this.gridColumns = '4'; // 4 columns for large screens
    } else if (width > 950) {
      this.gridColumns = '3'; // 3 columns for tablets
    } else if (width > 635) {
      this.gridColumns = '2'; // 2 columns for small devices
    } else {
      this.gridColumns = '1'; // 1 column for phones
    }
  }
}
