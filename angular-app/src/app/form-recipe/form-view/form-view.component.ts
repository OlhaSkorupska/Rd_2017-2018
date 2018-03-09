import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { ActivatedRoute, Data, Params, Router } from '@angular/router'; 
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.scss']
})
export class FormViewComponent {
  recipe: Recipe = new Recipe();
constructor(
    private recipeService: RecipesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
         
    console.log(this.recipe.title);
    this.route.queryParams
      .subscribe(
        (params: Params) => {
          this.recipe = this.recipeService.getRecipe(+params['id']);
        }
      );
      console.log(this.recipe);

    // this.route.data
    //   .subscribe(
    //     (data: Data) => {
    //       this.recipe = data.recipe;
    //     }
    //   )
  }

  edit() {
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve'
    });
  }

}
