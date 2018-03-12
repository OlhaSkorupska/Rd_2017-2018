import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { Recipe } from '../models/recipe.model';

@Injectable()
export class RecipesListResolve implements Resolve<Recipe[]> {
  constructor(
    private recipeService: RecipesService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<Recipe[]> | Promise<Recipe[]> | Recipe[] {
      return this.recipeService.getRecipes();
  }
}