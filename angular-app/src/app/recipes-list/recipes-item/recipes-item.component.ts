import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss']
})
export class RecipesItemComponent {

  constructor (
    private service: RecipesService
  ) {

  }
  @Output() deletedRecipe = new EventEmitter();
  @Input() recipeItem: Recipe;

  deleteRecipe(item) {
    this.deletedRecipe.emit(item);      
  }
}
