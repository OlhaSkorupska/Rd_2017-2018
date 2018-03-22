import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { PurchasesListComponent } from './purchases-list/purchases-list.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
import { FormEditComponent } from './form-recipe/form-edit/form-edit.component';
import { FormNewComponent } from './form-recipe/form-new/form-new.component';
import { RecipeViewComponent } from './recipes-list/recipe-view/recipe-view.component';
import { RecipesListResolve } from './services/recipes-list-resolver.service';
import { RecipeDetailsResolve } from './services/recipe-details.service';
import { PurchasesResolve } from './services/purchases-resolve.service';
import { FavoritesListResolve } from './services/favorites-list-resolver.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: AllRecipesComponent, resolve: { recipe: RecipesListResolve }, },
  { path: 'recipes/create', component: FormNewComponent, }, 
  { path: 'recipes/:id', component: RecipeViewComponent, resolve: { recipe: RecipeDetailsResolve }, },    
  { path: 'recipes/edit/:id', component: FormEditComponent, resolve: { recipe: RecipeDetailsResolve }, },    
  { path: 'purchases', component: PurchasesListComponent, resolve: { recipe: PurchasesResolve }, },   
  { path: 'favorites', component: FavoritesListComponent, resolve: { recipe: FavoritesListResolve }, }, 
  { path: '**', redirectTo: '/' }  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}