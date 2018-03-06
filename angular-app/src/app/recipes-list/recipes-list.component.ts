import { Component, OnInit, Output } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipeItems;

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
