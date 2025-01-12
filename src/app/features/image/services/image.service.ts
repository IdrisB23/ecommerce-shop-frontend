import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BackendUrlService} from '../../../core/services/backend-url.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiUrl: string;

  constructor(private http: HttpClient, private backendUrlService: BackendUrlService) {
    this.apiUrl = this.backendUrlService.getBaseUrl();
  }

  getImageById(imageId: string): Observable<Blob> {
    return this.http.get<Blob>(
      `${this.apiUrl}/images/image/download/${imageId}?disposition=inline`,
      {responseType: 'blob' as 'json'}
    );
  }
}
