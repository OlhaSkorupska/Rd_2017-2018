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

  constructor(
    private service: PurchasesService
  )
  {}

  onDeletePurchase(purchase: Purchase) {
    this.service.removeIngridient(purchase);    
  }  
}
