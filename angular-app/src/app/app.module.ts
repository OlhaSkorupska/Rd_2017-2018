import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderMainComponent } from './header-main/header-main.component';
import { HeaderMenuComponent } from './header-main/header-menu/header-menu.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RecipesService } from './services/recipes.service';
import { PurchasesService } from './services/purchases.service';
import { AppRoutingModule } from './app-routing.module';
import { FormService } from './services/form.service';
import { RecipesListResolve } from './services/recipes-list-resolver.service';
import { RecipeDetailsResolve } from './services/recipe-details.service';
import { PurchasesResolve } from './services/purchases-resolve.service';
import { CategoriesService } from './services/categories.service';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { FavoritesListResolve } from './services/favorites-list-resolver.service';
import { RecipesModule } from './recipes/recipes.module';
import { PurchaseListModule } from './purchases-list/purchases-list.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderMainComponent,
    HeaderMenuComponent,
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule, 
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RecipesModule,
    PurchaseListModule
  ],
  providers: [ 
      RecipesService, 
      PurchasesService, 
      FormService, 
      RecipesListResolve, 
      RecipeDetailsResolve,
      PurchasesResolve,
      FavoritesListResolve,            
      CategoriesService,
      { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }      
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
