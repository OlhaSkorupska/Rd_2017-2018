import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable() 
export class CategoriesService {
    categories: Category[];
  
    constructor(
        private http: HttpClient
    ) {}

    public getCategories():Observable<Category[]> {
      return this.http.get<Category[]>('/categories', { observe: 'body' })
        .map(data => this.categories = data);
    }   
 
}
