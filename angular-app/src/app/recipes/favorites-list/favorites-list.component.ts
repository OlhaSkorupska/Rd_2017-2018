import { Component, Output } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { RecipesService } from '../../services/recipes.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.scss']
})
export class FavoritesListComponent {
  @Output() recipeItems: Recipe[];

  constructor(
    private service: RecipesService
  ) { }

  ngOnInit() {
    this.recipeItems = this.service.favoriteItems;
    this.service.recipesChanged.subscribe(
      (recipeItems: Recipe[]) => {
        this.recipeItems = recipeItems.filter(element => {
          console.log('dslkjlkasjd');
          if (element.isFavorite) {
            return element;
          }
        })
      } 
    );
  }

  ngOnDestroy() {
  }
}
