import { Component, OnInit } from '@angular/core';
import { PurchasesService } from '../services/purchases.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-purchases-list',
  templateUrl: './purchases-list.component.html',
  styleUrls: ['./purchases-list.component.scss']
})
export class PurchasesListComponent implements OnInit {
  purchases: Array<String> = [];
  
  constructor(
    private service: PurchasesService,
    private router: Router,
    private route: ActivatedRoute    
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

  reload() {
    this.router.navigate(['/purchases'], {relativeTo: this.route});
  }  
}
