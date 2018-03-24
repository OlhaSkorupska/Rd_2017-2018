import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipeItems: Recipe[];

  constructor(
    private service: RecipesService
  ) 
  { 
    this.service.recipesChanged.subscribe(
      (recipeItems: Recipe[]) => {
        this.recipeItems = recipeItems;
      }
    );
  }

  ngOnInit() {
    this.recipeItems = this.service.getRecipeItems();
  }

}
