import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserStorageService } from './storage/user-storage.service';
import { Observable } from 'rxjs';
const BASIC_URL ="http://localhost:9090/api"
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient,
    private userStorageService:UserStorageService) { }

    getProducts(): Observable<any> {
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      return this.http.get(BASIC_URL + '/products');
    }
    

}
