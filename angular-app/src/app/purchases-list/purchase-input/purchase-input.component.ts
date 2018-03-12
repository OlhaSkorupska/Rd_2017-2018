import {Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-purchase-input',
  templateUrl: './purchase-input.component.html',
  styleUrls: ['./purchase-input.component.scss']
})
export class PurchaseInputComponent {
  @Output() onAddPurchase = new EventEmitter();

  addPurchase(value) {
    this.onAddPurchase.emit(value);
  }
}
