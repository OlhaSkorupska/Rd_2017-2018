import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-form-recipe',
  templateUrl: './form-recipe.component.html',
  styleUrls: ['./form-recipe.component.scss']
})
export class FormRecipeComponent {
  categories = ['Main course', 'Apperetive', 'Dessert'];
  model: Recipe = new Recipe();  

  @Output() recipeAdded = new EventEmitter();
    
  constructor( ) { }

  onSubmit() {
    this.addRecipe();
  }

  addRecipe() {
    this.recipeAdded.emit(this.model);  
  }     

}
