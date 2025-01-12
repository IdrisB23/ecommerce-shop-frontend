import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {Product} from '../models/product.interface';
import {BackendUrlService} from '../../../core/services/backend-url.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl: string;

  constructor(private http: HttpClient, private backendUrlService: BackendUrlService) {
    this.apiUrl = this.backendUrlService.getBaseUrl();
  }

  getAllProducts(): Observable<{ message: string; data: Product[] }> {
    return this.http.get<{ message: string; data: Product[] }>(`${this.apiUrl}/products/all`).pipe(
      catchError(error => {
        console.error('Error fetching products:', error);
        return throwError(() => new Error('Failed to fetch products. Please try again later.'));
      })
    );
  }
}
