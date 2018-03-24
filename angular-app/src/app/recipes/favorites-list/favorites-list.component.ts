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
  subscription: Subscription;

  constructor(
    private service: RecipesService
  ) { }

  ngOnInit() {
    this.recipeItems = this.service.favoriteItems;
    this.subscription = this.service.recipesChanged.subscribe(
      (recipeItems: Recipe[]) => {
        this.recipeItems = recipeItems.filter(element => {
          if (element.isFavorite) {
            return element;
          }
        })
      } 
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();    
  }
}
