import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchasesListComponent } from './purchases-list/purchases-list.component';
import { PurchasesResolve } from './services/purchases-resolve.service';
import { AllRecipesComponent } from './recipes/all-recipes/all-recipes.component';
import { RecipesListResolve } from './services/recipes-list-resolver.service';
import { FormNewComponent } from './recipes/form-recipe/form-new/form-new.component';
import { RecipeViewComponent } from './recipes/recipes-list/recipe-view/recipe-view.component';
import { RecipeDetailsResolve } from './services/recipe-details.service';
import { FormEditComponent } from './recipes/form-recipe/form-edit/form-edit.component';
import { FavoritesListComponent } from './recipes/favorites-list/favorites-list.component';
import { FavoritesListResolve } from './services/favorites-list-resolver.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'purchases', component: PurchasesListComponent, resolve: { recipe: PurchasesResolve }, },
  { path: 'recipes', component: AllRecipesComponent, resolve: { recipe: RecipesListResolve }, },
  { path: 'recipes/create', component: FormNewComponent, }, 
  { path: 'recipes/:id', component: RecipeViewComponent, resolve: { recipe: RecipeDetailsResolve }, },    
  { path: 'recipes/edit/:id', component: FormEditComponent, resolve: { recipe: RecipeDetailsResolve }, },    
  { path: 'favorites', component: FavoritesListComponent, resolve: { recipe: FavoritesListResolve }, },       
  { path: '**', redirectTo: '/' }  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}