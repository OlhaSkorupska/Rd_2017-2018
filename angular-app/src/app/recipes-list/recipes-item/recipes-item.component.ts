import { Component, Input } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss']
})
export class RecipesItemComponent {
  model: Recipe;
  constructor (
    private service: RecipesService
  ) { }

  @Input() recipeItem: Recipe;

  deleteRecipe(item) {
    this.service.removeRecipe(item);
  }  

  like(id: number) {
    this.model = new Recipe();
    this.model.id = id;
    this.model.likes = 1;
    this.service.updateRecipe(this.model);
  }

  dislike(id: number) {
    this.model = new Recipe();
    this.model.id = id;
    this.model.likes = -1;
    this.service.updateRecipe(this.model);
  }
}
