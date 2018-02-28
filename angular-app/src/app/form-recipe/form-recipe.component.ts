import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-form-recipe',
  templateUrl: './form-recipe.component.html',
  styleUrls: ['./form-recipe.component.scss']
})
export class FormRecipeComponent implements OnInit {
  categories = ['Main course', 'Apperetive', 'Dessert'];
  model: Recipe = new Recipe('', '', '', [''], '', '', 0);  
  constructor() { }

  ngOnInit() {
  }

}
