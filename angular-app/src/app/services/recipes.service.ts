import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Subject } from 'rxjs/Subject';
import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import * as env from '../../environments/environment';

@Injectable() 
export class RecipesService {
    recipeItems: Recipe[];
    
    constructor(
      private http: HttpClient
    ) {}

    public addRecipe(item, id: number) {
      if (!id) {
        item.id = Math.floor(Math.random() * 100000000);
      }
      this.recipeItems.push(item);
      return this.recipeItems;
    }    

    public updateRecipe(newModel) {
      const itemRecipe = this.recipeItems.find(
        (item) => {
          return item.id === newModel.id;
        }
      );
      if (itemRecipe) {
        itemRecipe.title = newModel.title || itemRecipe.title;
        itemRecipe.description = newModel.description || itemRecipe.description;
        itemRecipe.photoUrl = newModel.photoUrl || itemRecipe.photoUrl;
        itemRecipe.ingredients = newModel.ingredients || itemRecipe.ingredients;
        itemRecipe.instructions = newModel.instructions || itemRecipe.instructions;
        itemRecipe.categoryId = newModel.categoryId || itemRecipe.categoryId;
        itemRecipe.likes = (newModel.likes) ? (itemRecipe.likes + newModel.likes) : itemRecipe.likes; 
        itemRecipe.category = newModel.category || itemRecipe.category;                                                       
      }   
    }      

    public removeRecipe(value) {
      const index = this.recipeItems.indexOf(value);
      this.recipeItems.splice(index, 1);
      this.recipesChanged.next(this.recipeItems);      
    }        

    public getRecipe(id: string): Observable<Recipe> {
      return this.http.get<Recipe>(`/recipes/${id}`, { observe: 'body' })
      .map(data => data);
    }      

   
    public getRecipes():Observable<Recipe[]> {
      return this.http.get<Recipe[]>('/recipes', { observe: 'body' })
        .map(data => this.recipeItems = data);
    }

    
    updateLikes(item: Recipe) {
      this.updateRecipe(item);
      this.recipesChanged.next(this.recipeItems);
    }    

    recipesChanged = new Subject<Recipe[]>();    
}
