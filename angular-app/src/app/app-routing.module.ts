import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { PurchasesListComponent } from './purchases-list/purchases-list.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
import { FormRecipeComponent } from './form-recipe/form-recipe.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AllRecipesComponent },
  { path: 'recipes', component: AllRecipesComponent, children: [
      { path: 'edit', component: FormRecipeComponent }
  ]},   
  { path: 'purchases', component: PurchasesListComponent },   
  { path: 'favorites', component: FavoritesListComponent }, 
  // { path: 'lessons', component: LessonsComponent,
  //   // canActivate: [ AuthGuard ],
  //   canActivateChild: [ AuthGuard ],
  //   children: [
  //     { path: ':id', component: LessonComponent, resolve: { lesson: LessonResolverService } },
  //     { path: ':id/edit', component: EditLessonComponent }
  //   ]
  // },
  // { path: 'users', component: UsersComponent, children: [
  //     { path: ':id/:name', component: UserComponent }
  //   ]
  // },
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}