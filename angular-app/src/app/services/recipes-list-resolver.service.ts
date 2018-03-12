import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { RecipesService } from '../services/recipes.service';

interface Recipe {
    title: string;
    description: string;
    photoUrl: string;
    ingredients: Array<string>;
    instructions: string;
    categoryId: string;
    likes: number;
    id: number
}

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