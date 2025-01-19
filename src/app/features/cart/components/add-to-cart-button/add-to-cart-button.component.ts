import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-add-to-cart-button',
  imports: [MatButtonModule],
  template: `<button mat-button (click)="addToCart()">Add to Cart</button>`
})
export class AddToCartButtonComponent {
  @Input() productId!: number;
  @Output() itemAdded = new EventEmitter<number>();

  addToCart(): void {
    this.itemAdded.emit(this.productId);
  }
}
