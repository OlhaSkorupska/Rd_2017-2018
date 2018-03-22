import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Purchase } from '../models/purchase.model';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { RecipesService } from './recipes.service';

@Injectable() 
export class PurchasesService {
    purchases: Purchase[];
    purchasesChanged = new Subject<Purchase[]>();     

    constructor(
        private http: HttpClient,
        private recipeService: RecipesService
      ) {}

    public getPurchases():Observable<Purchase[]> {
        return this.http.get<Purchase[]>('/purchases')
          .map(
            (data) => {
                this.purchases = data;
                return data;
              }              
          );
    }

    public addIngredient(item: String):Observable<Purchase[]> {
        return this.http.post<Purchase[]>('/purchases', { 'purchases': item })
            .map(response => {
                this.purchases = response;
                this.purchasesChanged.next(this.purchases);
                return this.purchases;
            })
            .catch(this.recipeService.handleError); 
    }    

    public removeIngredient(id: string) {
        return this.http.delete<Purchase[]>(`/purchases/${id}`)
            .map(response => {
                this.purchases = response;
                this.purchasesChanged.next(this.purchases);
                return this.purchases;
            })
            .catch(this.recipeService.handleError);             
    }        

}
