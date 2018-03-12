import { Component, OnInit } from '@angular/core';
import { PurchasesService } from '../services/purchases.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Purchase } from '../models/purchase.model';

@Component({
  selector: 'app-purchases-list',
  templateUrl: './purchases-list.component.html',
  styleUrls: ['./purchases-list.component.scss']
})
export class PurchasesListComponent implements OnInit {
  purchases: Purchase[];
  
  constructor(
    private service: PurchasesService,
    private router: Router,
    private route: ActivatedRoute    
  ) { }

  ngOnInit() {
    this.purchases = this.service.init();
  }
 
}
