import { Component, OnInit, OnDestroy, Output, ViewChild } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router'; 
import { RecipesService } from '../../../services/recipes.service';
import { Subscription } from 'rxjs/Subscription';
import { FormRecipeComponent } from '../form-recipe.component';


@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.scss']
})
export class FormEditComponent implements OnInit, OnDestroy {
    @Output() model: Recipe = new Recipe();
    paramsSubscription: Subscription;

    @ViewChild('operation')
    private operation: FormRecipeComponent;

    constructor(
      private recipeService: RecipesService,
      private route: ActivatedRoute,
      private router: Router
    ) { }
  
    ngOnInit() {
      this.operation.notifyMe('Edit');    

      this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.recipeService.getRecipe(params['id'])
          .subscribe(
            result => this.model = result,
            error => console.log(error.statusText)
          );
        });         
    }

    ngOnDestroy() {
      this.paramsSubscription.unsubscribe();
    }
  }

