import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { PurchaseInputComponent } from './purchase-input/purchase-input.component';
import { PurchaseItemComponent } from './purchase-item/purchase-item.component';
import { PurchasesListComponent } from './purchases-list.component';
import { PurchasesRoutingModule } from './purchases-list-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PurchaseInputComponent,
    PurchaseItemComponent,
    PurchasesListComponent
  ],
  imports: [
    CommonModule,
    PurchasesRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,     
  ]
})
export class PurchaseListModule {}