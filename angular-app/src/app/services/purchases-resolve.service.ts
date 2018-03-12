import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { PurchasesService } from '../services/purchases.service';

@Injectable()
export class PurchasesResolve implements Resolve<Array<String>> {
  constructor(
    private purchasesService: PurchasesService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<Array<String>> | Promise<Array<String>> | Array<String> {
      return this.purchasesService.init();
  }
}