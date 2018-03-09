import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Recipe } from '../models/recipe.model';
import { RecipesService } from './recipes.service';

@Injectable() 
export class FormService {

    model: Recipe = new Recipe();  

    public initForm(newModel) {
        this.model = newModel;        
    }  
   
}
