import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Category } from './category.model';
import { Observable } from 'rxjs';


@Injectable()
export class RestService {

  baseUrl: string="http://localhost:3500/";

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl +'products');
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl +'categories');
  } 
}
