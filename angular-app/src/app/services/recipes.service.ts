import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as env from '../../environments/environment';

@Injectable() 
export class RecipesService {
    recipesItems: Recipe[];
    favoriteItems: Recipe[];
    recipesChanged = new Subject<Recipe[]>(); 
    recipeChanged = new Subject<Recipe>();

    constructor(
      private http: HttpClient
    ) {}

    public getRecipeItems() {
      return this.recipesItems;
    }

    public addRecipe(data: Recipe): Observable<Recipe> {
      return this.http.post(`/recipes`, data)
        .catch(this.handleError);
    }    

    public updateRecipe(newModel: Recipe) {
      return this.http.put<Recipe>(`/recipes`, newModel)
        .catch(this.handleError);
    }      

    public removeRecipe(id): Observable<Recipe> {
      return this.http.delete<Recipe[]>(`/recipes/${id}`)
      .map(response => {
        this.recipesItems = this.recipesItems.filter(
          (item) => {
            return item.id !== id;
          }
        );
        this.callChangedSubject(this.recipesItems);
      })      
      .catch(this.handleError);  
    }        

    public callChangedSubject(recipes) {
      this.recipesChanged.next(this.recipesItems);
    }

    public getRecipe(id: string): Observable<Recipe> {
      return this.http.get(`/recipes/${id}`)
      .map(response => response)
      .catch(this.handleError);          
    }      

    public getRecipes():Observable<Recipe[]> {
      return this.http.get<Recipe[]>('/recipes')
        .map(response => this.recipesItems = response)
        .catch(this.handleError);         
    }

    public getFavorites():Observable<Recipe[]> {
      return this.http.get<Recipe[]>('/favorites')
        .map(response => {
          this.favoriteItems = response;
          this.callChangedSubject(response);          
          return this.favoriteItems;
        })
        .catch(this.handleError);         
    }

    public updateLike(id: string):Observable<Recipe>  {
      return this.http.post<Recipe>(`/recipes/likes`, { 'id': id })
        .catch(this.handleError);        
    }    

    public updateDislike(id: string):Observable<Recipe>  {
      return this.http.post<Recipe>(`/recipes/dislikes`, { 'id': id })
        .catch(this.handleError);  
    } 

    public toFavorites(id: string):Observable<Recipe[]> {
      return this.http.post<Recipe[]>(`/favorites`, { 'id': id })
        .catch(this.handleError);      
    }

    public fromFavorites(id: string):Observable<Recipe[]> {
      return this.http.delete<Recipe[]>(`/favorites/${id}`)
        .catch(this.handleError);      
    }

    public toPurchases(ingredients: String[]):Observable<Recipe[]> {
      return this.http.post<Recipe>(`/purchases`, { 'purchases': ingredients })
        .catch(this.handleError);      
    }

    public handleError (error: Response | any) {
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
