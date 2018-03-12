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

  constructor(
    private recipeService: RecipesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.recipeItem = this.recipeService.getRecipe(+params['id']);
        }
      );
    }

    ngOnDestroy() {
      this.paramsSubscription.unsubscribe();
    }

}
