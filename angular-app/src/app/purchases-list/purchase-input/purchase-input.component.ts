import {Component } from '@angular/core';
import { PurchasesService } from '../../services/purchases.service';

@Component({
  selector: 'app-purchase-input',
  templateUrl: './purchase-input.component.html',
  styleUrls: ['./purchase-input.component.scss']
})
export class PurchaseInputComponent {
 
  constructor(
    private service: PurchasesService
  )
  {}

  addPurchase(value) {
    this.service.addIngridient(value);
  }
}
