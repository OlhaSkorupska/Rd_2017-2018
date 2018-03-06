import { Component, OnInit } from '@angular/core';
import { PurchasesService } from '../services/purchases.service';

@Component({
  selector: 'app-purchases-list',
  templateUrl: './purchases-list.component.html',
  styleUrls: ['./purchases-list.component.scss']
})
export class PurchasesListComponent implements OnInit {
  purchases: Array<String> = [];

  constructor(
    private service: PurchasesService
  ) { }

  ngOnInit() {
    this.purchases = this.service.init();
  }

  onPurchasesAdded(value) {
    this.service.addIngridient(value);
  }

  onDeletePurchase(id) {
    this.service.removeIngridient(id);    
  }
}
