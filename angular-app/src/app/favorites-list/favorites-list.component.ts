import { Component } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipesService } from '../services/recipes.service';


@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.sass']
})
export class FavoritesListComponent {
  recipeItems: Recipe[];
  id: number;

  constructor(
    private service: RecipesService
  ) { }

  ngOnInit() {
    this.recipeItems = this.service.recipeItems;
  }

  addRecipe(value) {
    this.recipeItems = this.service.addRecipe(value);
  }     
  
  deleteRecipe(value) {
    this.recipeItems = this.service.removeRecipe(value);
  }  
}
