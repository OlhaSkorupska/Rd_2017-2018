import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderMainComponent } from './header-main/header-main.component';
import { HeaderMenuComponent } from './header-main/header-menu/header-menu.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesItemComponent } from './recipes-list/recipes-item/recipes-item.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormRecipeComponent } from './form-recipe/form-recipe.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { AddRecipeComponent } from './all-recipes/add-recipe/add-recipe.component';
import { RecipesService } from './services/recipes.service';
import { PurchasesListComponent } from './purchases-list/purchases-list.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
import { PurchaseInputComponent } from './purchases-list/purchase-input/purchase-input.component';
import { PurchaseItemComponent } from './purchases-list/purchase-item/purchase-item.component';
import { PurchasesService } from './services/purchases.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMainComponent,
    HeaderMenuComponent,
    RecipesListComponent,
    RecipesItemComponent,
    FormRecipeComponent,
    AllRecipesComponent,
    AddRecipeComponent,
    PurchasesListComponent,
    FavoritesListComponent,
    PurchaseInputComponent,
    PurchaseItemComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [ RecipesService, PurchasesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }