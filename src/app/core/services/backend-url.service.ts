import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendUrlService {
  private readonly baseUrl = 'http://localhost:9193/api/v1';

  constructor() { }

  getBaseUrl(): string {
    return this.baseUrl;
  }
}
