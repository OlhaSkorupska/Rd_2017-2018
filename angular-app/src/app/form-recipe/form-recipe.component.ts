import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipesService } from '../services/recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { FormGroup, FormControl, Validators, AbstractControl, AsyncValidatorFn, FormArray } from '@angular/forms';

import { urlValidator } from './url-validator';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-form-recipe',
  templateUrl: './form-recipe.component.html',
  styleUrls: ['./form-recipe.component.scss']
})
export class FormRecipeComponent implements OnInit {

  categories = ['Appetizer', 'Main course', 'Soup', 'Desert'];

  model: Recipe = new Recipe();
  paramsSubscription: Subscription;
  path: String;
  formRecipe: FormGroup;

  title: FormControl;
  description: FormControl;
  photoUrl: FormControl;
  instructions: FormControl;
  category: FormControl;
  ingredients: FormArray;


  constructor(
    private service: RecipesService,
    private formService: FormService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  createFormControls() {
    this.title = new FormControl(null, Validators.required);
    this.description = new FormControl(null, Validators.required);
    this.photoUrl = new FormControl(null,
      [
        Validators.required,
        urlValidator()
      ]);
    this.instructions = new FormControl(null, Validators.required);
    this.ingredients = new FormArray([]);
    this.category = new FormControl(null, Validators.required);
  }

  createForm() {
    this.formRecipe = new FormGroup({
      'title': this.title,
      'description': this.description,
      'photoUrl': this.photoUrl,
      'instructions': this.instructions,
      'ingredients': this.ingredients,
      'category': this.category
    });
  }

  ngOnInit() {
    this.path = this.route.routeConfig.path;
    if (this.path !== 'recipes/create') {
      this.createRecipe();
      this.initForm(this.model);      
    } else {
      this.createFormControls();
    }
    this.createForm();
  }

  addIngredient() {
    const control = new FormControl(null);
    this.ingredients.push(control);
  }

  deleteIngredient(value) {
    this.ingredients.removeAt(value);
  }

  createRecipe() {
    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.model = this.service.getRecipe(+params['id']);
          this.initForm(this.model);
        }
      );
  }

  initForm(model: Recipe) {
    this.title = new FormControl(model.title, Validators.required);
    this.description = new FormControl(model.description, Validators.required);
    this.photoUrl = new FormControl(model.photoUrl,
      [
        Validators.required,
        urlValidator()
      ]);
    this.instructions = new FormControl(model.instructions, Validators.required);
    this.ingredients = new FormArray([]);
    this.category = new FormControl(model.category, Validators.required);    
  }

  onSubmit() {
    if (this.path === 'recipes/create') {
      this.service.addRecipe(this.formRecipe.value, null);
      this.router.navigate(['/recipes', this.formRecipe.value.id]);
    } else {
      this.formRecipe.value.id = this.model.id;
      this.service.updateRecipe(this.formRecipe.value);
      this.router.navigate(['/recipes', this.formRecipe.value.id]);
    }
  }

  next() {
    return this.model.category;
  }

}
