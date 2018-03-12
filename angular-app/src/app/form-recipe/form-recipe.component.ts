import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipesService } from '../services/recipes.service';
import { FormService } from '../services/form.service';
import { ActivatedRoute, Params, Router } from '@angular/router'; 
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
  path: String;
    
  constructor(
    private service: RecipesService,
    private formService: FormService,
    private route: ActivatedRoute,
    private router: Router
   ) { }

  ngOnInit() {
    this.path = this.route.routeConfig.path;  
    if (this.path !== 'create') {
      this.createRecipe();
    }
  }

  createRecipe() {
    this.paramsSubscription = this.route.params
    .subscribe(
      (params: Params) => {
        this.model = this.service.getRecipe(+params['id']);
      }
    );
  }

  onSubmit() {
    if (this.path === 'create') {
      this.service.addRecipe(this.model, null);      
      this.router.navigate(['/recipes', this.model.id]);          
    } else {
      this.service.updateRecipe(this.model);      
      this.router.navigate(['/recipes', this.model.id]);          
    }
  }

}
