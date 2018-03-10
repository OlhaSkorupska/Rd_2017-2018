import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Recipe } from '../models/recipe.model';

@Injectable() 
export class FormService {

    model: Recipe = new Recipe();  

    public initForm(newModel) {
        this.model = newModel;        
    }  
   
}
