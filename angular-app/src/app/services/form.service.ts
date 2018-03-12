import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable() 
export class FormService {

    model: Recipe = new Recipe();  

    public initForm(newModel) {
        this.model = newModel;        
    }  
   
}
