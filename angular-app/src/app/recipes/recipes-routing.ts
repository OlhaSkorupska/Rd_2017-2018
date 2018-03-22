import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { RecipesListResolve } from '../services/recipes-list-resolver.service';
import { FormNewComponent } from './form-recipe/form-new/form-new.component';
import { RecipeViewComponent } from './recipes-list/recipe-view/recipe-view.component';
import { RecipeDetailsResolve } from '../services/recipe-details.service';
import { FormEditComponent } from './form-recipe/form-edit/form-edit.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
import { FavoritesListResolve } from '../services/favorites-list-resolver.service';

const recipesRoutes: Routes = [
    { path: 'recipes', component: AllRecipesComponent, resolve: { recipe: RecipesListResolve }, },
    { path: 'recipes/create', component: FormNewComponent, }, 
    { path: 'recipes/:id', component: RecipeViewComponent, resolve: { recipe: RecipeDetailsResolve }, },    
    { path: 'recipes/edit/:id', component: FormEditComponent, resolve: { recipe: RecipeDetailsResolve }, },    
    { path: 'favorites', component: FavoritesListComponent, resolve: { recipe: FavoritesListResolve }, },   
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [ RouterModule ]
})
export class RecipesRoutingModule {}