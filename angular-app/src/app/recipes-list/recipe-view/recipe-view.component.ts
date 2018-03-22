import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router'; 
import { RecipesService } from '../../services/recipes.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.scss']
})
export class RecipeViewComponent implements OnInit, OnDestroy {
  recipeItem: Recipe = new Recipe();
  paramsSubscription: Subscription;
  favoritesSub: Subscription;
  title: string = 'Add to Favorites';  
  isFavorites: boolean = false;

  constructor(
    private recipeService: RecipesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.recipeService.getRecipe(params['id'])
          .subscribe(
            result => {
              this.isFavorites = (result.isFavorite);
              this.title = this.isFavorites
                ? 'Delete From Favorites'
                : 'Add to Favorites';
              return this.recipeItem = result;
            },
            error => console.log(error.statusText)
          );
    });      
  }

  addToFavorites(id: string) {
    this.favoritesSub = (this.isFavorites)
      ? this.recipeService.fromFavorites(id)
          .subscribe(
            result => {
              this.isFavorites = false;
              this.title = 'Add to Favorites';
            return result;
          },
          error => console.log(error.statusText)
        )
      : this.recipeService.toFavorites(id)
          .subscribe(
            result => {
            this.isFavorites = true;
            this.title = 'Delete From Favorites';
            return result;
          },
          error => console.log(error.statusText)
        );
  }

  addToPurchases(ingredients: String[]) {
    this.recipeService.toPurchases(ingredients)
    .subscribe(
      result => result,
      error => console.log(error.statusText)
    );      
  } 

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
