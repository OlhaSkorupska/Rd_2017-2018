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
  constructor (
    private service: RecipesService
  ) { }

  @Input() recipeItem: Recipe;

  ngOnInit() {
    this.service.likesChanged.subscribe(
      (likes: number) => {
        this.model.likes = this.recipeItem.likes;
      }
    );
  }

  deleteRecipe(item) {
    this.service.removeRecipe(item);
  }  

  likes(id: number, likes: boolean) {
    this.model = new Recipe();
    this.model.id = id;
    this.model.likes = (likes) ? 1 : -1;
    this.service.updateLikes(this.model);
  }
}
