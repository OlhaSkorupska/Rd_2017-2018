import { Component, Input } from '@angular/core';
import { PurchasesService } from '../../services/purchases.service';
import { Purchase } from '../../models/purchase.model';

@Component({
  selector: 'app-purchase-item',
  templateUrl: './purchase-item.component.html',
  styleUrls: ['./purchase-item.component.scss']
})
export class PurchaseItemComponent {
  @Input() purchase: Purchase;
  purchases: Purchase[];  

  constructor(
    private service: PurchasesService
  ) {}

  ngOnInit() {
    this.purchases = this.service.purchases;
    this.service.purchasesChanged.subscribe(
      (items: Purchase[]) => {
        this.purchases = items;
      }
    );
  } 
  
  onDeletePurchase(id) {
    this.service.removeIngredient(id)
      .subscribe(
        result => result,
        error => error
    );    
  }  
}
