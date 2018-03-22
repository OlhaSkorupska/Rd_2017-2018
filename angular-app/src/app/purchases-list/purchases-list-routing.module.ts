import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import { FavoritesListResolve } from '../services/favorites-list-resolver.service';
import { PurchasesListComponent } from './purchases-list.component';
import { PurchasesResolve } from '../services/purchases-resolve.service';

const purchasesRoutes: Routes = [
    { path: 'purchases', component: PurchasesListComponent, resolve: { recipe: PurchasesResolve }, },    
];

@NgModule({
  imports: [
    RouterModule.forChild(purchasesRoutes)
  ],
  exports: [ RouterModule ]
})
export class PurchasesRoutingModule {}