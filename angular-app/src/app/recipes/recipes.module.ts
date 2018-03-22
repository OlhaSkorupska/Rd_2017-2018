import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { AddRecipeComponent } from './all-recipes/add-recipe/add-recipe.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
import { FormRecipeComponent } from './form-recipe/form-recipe.component';
import { FormEditComponent } from './form-recipe/form-edit/form-edit.component';
import { FormNewComponent } from './form-recipe/form-new/form-new.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeViewComponent } from './recipes-list/recipe-view/recipe-view.component';
import { RecipesItemComponent } from './recipes-list/recipes-item/recipes-item.component';
import { RecipesRoutingModule } from './recipes-routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
      AllRecipesComponent,
      AddRecipeComponent,
      FavoritesListComponent,
      FormRecipeComponent,
      FormEditComponent,
      FormNewComponent,
      RecipesListComponent,
      RecipeViewComponent,
      RecipesItemComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,    
  ]
})
export class RecipesModule {}