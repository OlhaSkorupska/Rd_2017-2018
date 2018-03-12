import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Purchase } from '../models/purchase.model';

@Injectable() 
export class PurchasesService {
    purchases: Purchase[] = [
        { ingridient: 'bread', id: 1 },
        { ingridient: 'oil', id: 2 },
        { ingridient: 'sugar', id: 3 } 
    ];

    public init() {
        return this.purchases;     
    }  

    public addIngridient(item) {
        let object = new Purchase;
        object.id = Math.floor(Math.random() * 100000000);
        object.ingridient = item;
        this.purchases.push(object);
        console.log(this.purchases);
        return this.purchases;        
    }    

    public removeIngridient(purchase: Purchase) {
        const index = this.purchases.indexOf(purchase);
        this.purchases.splice(index, 1);
        return this.purchases;               
    }        

}
