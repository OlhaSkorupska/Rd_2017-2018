import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router'; 
import { RecipesService } from '../../services/recipes.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.scss']
})
export class FormEditComponent implements OnInit, OnDestroy {
    @Output() model: Recipe = new Recipe();
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
            this.model = this.recipeService.getRecipe(+params['id']);
          }
        );
    }

    ngOnDestroy() {
      this.paramsSubscription.unsubscribe();
    }
  }

