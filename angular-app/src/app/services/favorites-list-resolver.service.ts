import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { Recipe } from '../models/recipe.model';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class FavoritesListResolve implements Resolve <Recipe[]> {
  constructor(
    private recipeService: RecipesService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<Recipe[]> | Promise<Recipe[]> | Recipe[] {
      return this.recipeService.getFavorites();
  }
}