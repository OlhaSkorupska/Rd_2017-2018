import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { PurchasesListComponent } from './purchases-list/purchases-list.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
import { FormRecipeComponent } from './form-recipe/form-recipe.component';
import { RecipesService } from './services/recipes.service';
import { FormEditComponent } from './form-recipe/form-edit/form-edit.component';
import { FormNewComponent } from './form-recipe/form-new/form-new.component';
import { FormViewComponent } from './form-recipe/form-view/form-view.component';
import { FormResolverService } from './services/form-resolver.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AllRecipesComponent },
  { path: 'recipes', component: AllRecipesComponent, },
  { path: 'recipes/new', component: FormNewComponent, },
  { path: 'recipes/edit', component: FormEditComponent, },  
  { path: 'view', component: FormViewComponent, 
    children: [
      { path: ':id', component: FormViewComponent, resolve: { recipe: FormResolverService } }
  ]  
  },    
  { path: 'purchases', component: PurchasesListComponent },   
  { path: 'favorites', component: FavoritesListComponent }, 
  { path: '**', redirectTo: '/' }  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}