import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable() 
export class CategoriesService {
    categories: Category[] = [
        { name: 'Appetizer', id: 1 },
        { name: 'Main course', id: 2 },
        { name: 'Soup', id: 3 },
        { name: 'Desert', id: 4 }         
    ];
  
    public init() {
        return this.categories;     
    }  
}
