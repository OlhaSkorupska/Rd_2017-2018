import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipesService } from '../services/recipes.service';
import { FormService } from '../services/form.service';
import { ActivatedRoute, Data, Params, Router } from '@angular/router'; 
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-form-recipe',
  templateUrl: './form-recipe.component.html',
  styleUrls: ['./form-recipe.component.scss']
})
export class FormRecipeComponent implements OnInit {
  categories = ['Main course', 'Apperetive', 'Dessert'];
  model: Recipe = new Recipe();
  paramsSubscription: Subscription;
    
  constructor(
    private service: RecipesService,
    private formService: FormService,
    private route: ActivatedRoute,
    private router: Router
   ) { }

  ngOnInit() {
    this.model.id = this.route.params.value['id'];
    if (this.model.id) {
      this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.model = this.service.getRecipe(+params['id']);
        }
      );
    }
  }

  onSubmit() {
    this.formService.model = this.model; 
    if (this.model.id) {
      this.service.updateRecipe(this.model);      
      this.router.navigate(['recipes', this.model.id]);          
    } else {
      this.service.addRecipe(this.model, null);      
      this.router.navigate(['recipes', this.model.id]);          
    }
  }

  // ngOnDestroy() {
  //   this.paramsSubscription.unsubscribe();
  // }


}
