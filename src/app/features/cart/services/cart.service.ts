import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackendUrlService } from '../../../core/services/backend-url.service';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl: string;

  constructor(private http: HttpClient, private backendService: BackendUrlService) {
    this.apiUrl = this.backendService.getBaseUrl();
  }

  addProductToCart(productId: string): Observable<{ message: string, data: null }> {
    const params = new HttpParams()
    .set('productId', productId)
    .set('quantity', '1');

    return this.http.post<{ message: string, data: null }>(`${this.apiUrl}/cart-items/cart-item/add`, null, { params })
    .pipe(
      catchError(error=>{
        console.error('Error adding products to cart:', error);
        return throwError(() => new Error('Failed to add product to cart. Please try again later.'));
      })
    )
  }
}
