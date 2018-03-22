import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss']
})
export class RecipesItemComponent implements OnInit{
  model: Recipe;

  constructor (
    private service: RecipesService
  ) { }

  @Input() recipeItem: Recipe;

  deleteRecipe(item) {
    this.service.removeRecipe(item.id)
    .subscribe(
      result => result,
      error => console.log(error.statusText)
    );
  }  

  ngOnInit() {
    this.service.recipeChanged.subscribe(
      (recipe: Recipe) => {
        if (recipe.id === this.recipeItem.id) {
          this.recipeItem = recipe;  
        }
      }
    );
  }

  like(id: string) {
    console.log(id);
    this.service.updateLike(id).subscribe(
      result => {
        this.service.recipeChanged.next(result);        
        return result;        
      },
      error => console.log(error.statusText)
    );
  }

  dislike(id: string) {
    this.service.updateDislike(id).subscribe(
      result => {
        this.service.recipeChanged.next(result);        
        return result;        
      },
      error => console.log(error.statusText)
    );
  }  
}
