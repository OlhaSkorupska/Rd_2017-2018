import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipesService } from '../services/recipes.service';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-form-recipe',
  templateUrl: './form-recipe.component.html',
  styleUrls: ['./form-recipe.component.scss']
})
export class FormRecipeComponent {
  categories = ['Main course', 'Apperetive', 'Dessert'];
  model: Recipe = new Recipe();  
    
  constructor(
    private service: RecipesService,
    private formService: FormService
   ) { }

  onSubmit() {
    this.service.addRecipe(this.model);
    this.formService.model = this.model;         
  }

}
