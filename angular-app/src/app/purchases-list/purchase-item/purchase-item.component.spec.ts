import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';

import { PurchaseItemComponent } from '../purchase-item/purchase-item.component';
import { PurchasesService } from '../../services/purchases.service';
import { Purchase } from '../../models/purchase.model';

describe('PurchaseItemComponent', () => {
  let component: PurchaseItemComponent;
  let service: PurchasesService;

  const purchase: Purchase = 
    {
      purchases: 'sugar',
      id: '1'
    };  
 

  beforeEach(() => {
    service = new PurchasesService(null, null);
    component = new PurchaseItemComponent(service);
  });

  describe('onInit', () => {
    it('should set purchase to data returned from service', () => {
      let purchases = service.purchases;
      component.ngOnInit();
      expect(component.purchases).toBe(purchases);
    });   
  });

  describe('onDeletePurchase', () => {
    it('should delete purchase from data', () => {
      let spy = spyOn(service, 'removeIngredient').and.returnValue(Observable.empty());      
      component.onDeletePurchase(purchase.id);
      expect(spy).toHaveBeenCalledWith(purchase.id);
    });   
  });  
}); 