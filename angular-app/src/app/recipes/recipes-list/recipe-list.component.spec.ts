import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import { RecipesListComponent } from './recipes-list.component';
import { RecipesService } from '../../services/recipes.service';
import { Recipe } from '../../models/recipe.model';
import { HttpClient } from '@angular/common/http';

describe('RecipesListComponent', () => {
  let component: RecipesListComponent;
  let service: RecipesService;

  const recipes: Recipe[] = [  {
    title: 'Sicilian Roasted Chicken',
    description: 'Chicken pieces seasoned with paprika, garlic powder, and oregano are roasted until juicy and tender in this simple Sicilian-inspired recipe.',
    photoUrl: 'http://images.media-allrecipes.com/userphotos/560x315/3922864.jpg',
    ingredients: ['1 whole chicken', '1 teaspoon salt', '1 teaspoon ground black pepper', '1 teaspoon ground paprika', '1 teaspoon garlic powder', '1 teaspoon dried oregano'],
    instructions: 'Preheat oven to 425 degrees F (220 degrees C). Grease a 9x13-inch pan with cooking spray. Arrange chicken pieces in the baking pan. Sprinkle salt, pepper, paprika, garlic powder, and oregano over both sides. Roast in the preheated oven until chicken is browned and the juices run clear, about 1 hour. An instant-read thermometer inserted near the bone should read 165 degrees F (74 degrees C).',
    categoryId: '-L4N7j92qDMvS8BbgE5u',
    likes: 0,
    id: '1',
    isFavorite: true
  }];  
 

  beforeEach(() => {
    service = new RecipesService(null);
    component = new RecipesListComponent(service);
  });

  describe('on init', () => {
    it('should set recipe to data returned from service', () => {
      spyOn(service, 'getRecipeItems').and.returnValue(recipes);
      component.ngOnInit();
      expect(component.recipeItems).toBe(recipes);
    });
    
    it('should set recipe to data returned from subject', () => {
      // console.log('service.recipesChanged', service.recipesChanged);
      // component.constructor();  
      // spyOn(service.recipesChanged, 'next').and.callFake(function(param) {
      //   return recipes;
      // });
   
      // console.log(component.recipeItems);
      // expect(component.recipeItems).toBe(recipes);
    }); 
  });
}); 