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
import { AppRoutingModule } from './app-routing.module';
import { FormService } from './services/form.service';
import { FormEditComponent } from './form-recipe/form-edit/form-edit.component';
import { RecipeViewComponent } from './recipes-list/recipe-view/recipe-view.component';
import { FormNewComponent } from './form-recipe/form-new/form-new.component';
import { FormResolverService } from './services/form-resolver.service';

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
    PurchaseItemComponent,
    FormEditComponent,
    RecipeViewComponent,
    FormNewComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule, 
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ RecipesService, PurchasesService, FormService, FormResolverService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
