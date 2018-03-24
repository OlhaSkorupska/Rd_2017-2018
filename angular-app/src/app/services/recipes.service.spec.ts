import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RecipesService } from './recipes.service';
import { Recipe } from '../models/recipe.model';


const recipes: Recipe[] = [
 
    {
      title: 'Sicilian Roasted Chicken',
      description: 'Chicken pieces seasoned with paprika, garlic powder, and oregano are roasted until juicy and tender in this simple Sicilian-inspired recipe.',
      photoUrl: 'http://images.media-allrecipes.com/userphotos/560x315/3922864.jpg',
      ingredients: ['1 whole chicken', '1 teaspoon salt', '1 teaspoon ground black pepper', '1 teaspoon ground paprika', '1 teaspoon garlic powder', '1 teaspoon dried oregano'],
      instructions: 'Preheat oven to 425 degrees F (220 degrees C). Grease a 9x13-inch pan with cooking spray. Arrange chicken pieces in the baking pan. Sprinkle salt, pepper, paprika, garlic powder, and oregano over both sides. Roast in the preheated oven until chicken is browned and the juices run clear, about 1 hour. An instant-read thermometer inserted near the bone should read 165 degrees F (74 degrees C).',
      categoryId: '-L4N7j92qDMvS8BbgE5u',
      likes: 0,
      id: '1',
      isFavorite: true  
    },
    {
      title: 'Tequila-Lime Pork Tenderloin',
      description: 'A wonderful overnight marinade gives your pork tenderloin a wonderful lime-grilled flavor. You can also grill one tenderloin and freeze the other for future use.',
      photoUrl: 'http://images.media-allrecipes.com/userphotos/250x250/880924.jpg',
      ingredients: ['1 cup fresh lime juice', '1/2 cup tequila', '1/2 cup orange juice', '1/4 cup chopped fresh cilantro', '2 tablespoons chopped green chiles', '1 1/2 tablespoons chili powder', '1 teaspoon minced garlic', '1 tablespoon honey', '1 teaspoon salt', '3/4 teaspoon ground black pepper', '2 pork tenderloins'],
      instructions: 'Whisk together the lime juice, tequila, orange juice, cilantro, chiles, chili powder, garlic, honey, salt, and pepper in a large bowl; pour into a gallon-sized resealable bag; add the pork tenderloins; seal and store in refrigerator overnight. Preheat an outdoor grill for high heat and lightly oil grate. Cook the pork on the preheated grill, turning occasionally, until meat has reached an internal temperature of 145 degrees F (63 degrees C), about 20 minutes.',
      categoryId: '-L4N7j92qDMvS8BbgE5u',
      likes: 0,
      id: '1',
      isFavorite: true  
    },
    {
      title: 'Chicken Parmesan',
      description: 'A classic Italian dish prepared with tomato sauce and mozzarella, with a few additions by Chef John. Sure to impress your friends and family!',
      photoUrl: 'http://images.media-allrecipes.com/userphotos/250x250/1036363.jpg',
      ingredients: ['4 skinless, boneless chicken breast halves', 'salt and freshly ground black pepper to taste', '2 eggs', '1 cup panko bread crumbs, or more as needed', '1/2 cup grated Parmesan cheese', '2 tablespoons all-purpose flour, or more if needed', '1 cup olive oil for frying', '1/2 cup prepared tomato sauce', '1/4 cup fresh mozzarella, cut into small cubes', '1/4 cup chopped fresh basil', '1/2 cup grated provolone cheese', '1/4 cup grated Parmesan cheese', '1 tablespoon olive oil'],
      instructions: `Preheat an oven to 450 degrees F (230 degrees C). 
      Place chicken breasts between two sheets of heavy plastic (resealable freezer bags work well) on a solid, level surface. Firmly pound chicken with the smooth side of a meat mallet to a thickness of 1/2-inch. Season chicken thoroughly with salt and pepper. 
      Beat eggs in a shallow bowl and set aside. 
      Mix bread crumbs and 1/2 cup Parmesan cheese in a separate bowl, set aside. 
      Place flour in a sifter or strainer; sprinkle over chicken breasts, evenly coating both sides. 
      Dip flour coated chicken breast in beaten eggs. Transfer breast to breadcrumb mixture, pressing the crumbs into both sides. Repeat for each breast. Set aside breaded chicken breasts for about 15 minutes. 
      Heat 1 cup olive oil in a large skillet on medium-high heat until it begins to shimmer. Cook chicken until golden, about 2 minutes on each side. The chicken will finish cooking in the oven. 
      Place chicken in a baking dish and top each breast with about 1/3 cup of tomato sauce. Layer each chicken breast with equal amounts of mozzarella cheese, fresh basil, and provolone cheese. Sprinkle 1 to 2 tablespoons of Parmesan cheese on top and drizzle with 1 tablespoon olive oil. 
      Bake in the preheated oven until cheese is browned and bubbly, and chicken breasts are no longer pink in the center, 15 to 20 minutes. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C).`,
      categoryId: '-L4N7j92qDMvS8BbgE5u',
      likes: 0,
      id: '1',
      isFavorite: true       
    }
]

describe('RecipesService', () => {
  let injector: TestBed;
  let service: RecipesService;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RecipesService]
    });
    injector = getTestBed();
    service = injector.get(RecipesService);
    httpMock = injector.get(HttpTestingController);
  });
  
  describe('#getRecipes', () => {
    it('should return recipes an Observable<Recipes[]>', () => {
 
      service.getRecipes().subscribe(recipes => {
        expect(recipes.length).toBe(3);
        expect(recipes).toEqual(recipes);
      });
  
      const req = httpMock.expectOne(`/recipes`);
      expect(req.request.method).toBe("GET");
      req.flush(recipes);
    });
  });

  describe('#getFavorites', () => {
    it('should return favorites an Observable<Recipes[]>', () => {
 
      service.getFavorites().subscribe(recipes => {
        expect(recipes.length).toBe(3);
        expect(recipes).toEqual(recipes);
      });
  
      const req = httpMock.expectOne(`/favorites`);
      expect(req.request.method).toBe("GET");
      req.flush(recipes);
    });
  });  

  afterEach(() => {
    httpMock.verify();
  });  
});


