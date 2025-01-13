import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-to-cart-button',
  imports: [],
  template: `<button class="btn-primary" (click)="addToCart()">Add to Cart</button>`
})
export class AddToCartButtonComponent {
  @Input() productId!: number;
  @Output() itemAdded = new EventEmitter<number>();

  addToCart(): void {
    this.itemAdded.emit(this.productId);
  }
}
