import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-form-recipe',
  templateUrl: './form-recipe.component.html',
  styleUrls: ['./form-recipe.component.scss']
})
export class FormRecipeComponent {
  categories = ['Main course', 'Apperetive', 'Dessert'];
  model: Recipe = new Recipe('', '', '', [''], '', '', 0);  

  @Output() recipeAdded = new EventEmitter();
    
  constructor() { }

  onSubmit() {
    this.addRecipe();
    // this.recipeAdded.emit(this.model);
    // console.log(this.model);
  }

  addRecipe() {
    console.log('form', this.model);
    this.recipeAdded.emit(this.model);    
  }     

}
