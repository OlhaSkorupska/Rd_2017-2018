import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { PurchasesService } from '../services/purchases.service';
import { Purchase } from '../models/purchase.model';

@Injectable()
export class PurchasesResolve implements Resolve<Purchase[]> {
  constructor(
    private purchasesService: PurchasesService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<Purchase[]> | Promise<Purchase[]> | Purchase[] {
      return this.purchasesService.init();
  }
}