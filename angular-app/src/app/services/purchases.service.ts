import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable() 
export class PurchasesService {
    purchases: Array<String> = [];

    public init() {
        return this.purchases = ['bread', 'oil', 'sugar'];
    }  

    public addIngridient(item) {
        this.purchases.push(item.value);
    }    

    public removeIngridient(id) {
        this.purchases.splice(id, 1);        
    }        

}
