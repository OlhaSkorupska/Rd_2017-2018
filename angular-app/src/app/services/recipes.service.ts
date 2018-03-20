import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Subject } from 'rxjs/Subject';
import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as env from '../../environments/environment';

@Injectable() 
export class RecipesService {
    recipesItems: Recipe[];
    
    constructor(
      private http: HttpClient
    ) {}

    public addRecipe(data: Recipe): Observable<Recipe> {
      return this.http.post<Recipe>(`/recipes`, data, { observe: 'body' })
      .map(data => data);      
    }    

    public updateRecipe(newModel: Recipe) {
      // const itemRecipe = this.recipeItems.find(
      //   (item) => {
      //     return item.id === newModel.id;
      //   }
      // );
      // if (itemRecipe) {
      //   itemRecipe.title = newModel.title || itemRecipe.title;
      //   itemRecipe.description = newModel.description || itemRecipe.description;
      //   itemRecipe.photoUrl = newModel.photoUrl || itemRecipe.photoUrl;
      //   itemRecipe.ingredients = newModel.ingredients || itemRecipe.ingredients;
      //   itemRecipe.instructions = newModel.instructions || itemRecipe.instructions;
      //   itemRecipe.categoryId = newModel.categoryId || itemRecipe.categoryId;
      //   itemRecipe.likes = (newModel.likes) ? (itemRecipe.likes + newModel.likes) : itemRecipe.likes; 
      //   itemRecipe.category = newModel.category || itemRecipe.category;                                                       
      // }  
      // return this.http.put<Recipe>(`/recipes`, newModel, { observe: 'body' })
      // .map(data => {
      //   console.log(data);
      //   return data
      // });       
      return this.http.put<Recipe>(`/recipes`, newModel)
        .map(response => response)
        .catch(this.handleError);
    }      

    public removeRecipe(value): Observable<Recipe> {
      return this.http.delete<Recipe>(`/recipes/${value}`)
      .map(response => response)
      .catch(this.handleError);  
    }        

    public getRecipe(id: string): Observable<Recipe> {
      return this.http.get<Recipe>(`/recipes/${id}`)
      .map(response => response)
      .catch(this.handleError);          
    }      

    public getRecipes():Observable<Recipe[]> {
      return this.http.get<Recipe[]>('/recipes')
        .map(response => this.recipesItems = response)
        .catch(this.handleError);         
    }

    updateLikes(item: Recipe) {
      this.updateRecipe(item);
      this.recipesChanged.next(this.recipesItems);
    }    

    recipesChanged = new Subject<Recipe[]>(); 

    private handleError (error: Response | any) {
      let errMsg: string;
      if (error instanceof Response) {
        const body = error || '';
        const err = error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return Observable.throw(errMsg);
    }    
}
