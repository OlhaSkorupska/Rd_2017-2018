import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss']
})
export class RecipesItemComponent implements OnInit {
  model: Recipe;
  recipeItems: Recipe[];

  constructor (
    private service: RecipesService
  ) { }

  @Input() recipeItem: Recipe;

  ngOnInit() {
    this.service.recipesChanged.subscribe(
      (recipeItems: Recipe[]) => {
        this.recipeItems = this.recipeItems;
      }
    );
  }

  deleteRecipe(item) {
    this.service.removeRecipe(item.id)
    .subscribe(
      result => result,
      error => console.log(error.statusText)
    );
  }  

  likes(id: number, likes: boolean) {
    this.model = new Recipe();
    this.model.id = id;
    this.model.likes = (likes) ? 1 : -1;
    this.service.updateLikes(this.model);
  }
}
