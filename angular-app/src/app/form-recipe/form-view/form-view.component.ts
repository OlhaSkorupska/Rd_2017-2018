import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { ActivatedRoute, Data, Params, Router } from '@angular/router'; 
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.scss']
})
export class FormViewComponent {
  recipe =
  {
    title: 'Tequila-Lime Pork Tenderloin',
    description: 'A wonderful overnight marinade gives your pork tenderloin a wonderful lime-grilled flavor. You can also grill one tenderloin and freeze the other for future use.',
    photoUrl: 'http://images.media-allrecipes.com/userphotos/250x250/880924.jpg',
    ingredients: ['1 cup fresh lime juice', '1/2 cup tequila', '1/2 cup orange juice', '1/4 cup chopped fresh cilantro', '2 tablespoons chopped green chiles', '1 1/2 tablespoons chili powder', '1 teaspoon minced garlic', '1 tablespoon honey', '1 teaspoon salt', '3/4 teaspoon ground black pepper', '2 pork tenderloins'],
    instructions: 'Whisk together the lime juice, tequila, orange juice, cilantro, chiles, chili powder, garlic, honey, salt, and pepper in a large bowl; pour into a gallon-sized resealable bag; add the pork tenderloins; seal and store in refrigerator overnight. Preheat an outdoor grill for high heat and lightly oil grate. Cook the pork on the preheated grill, turning occasionally, until meat has reached an internal temperature of 145 degrees F (63 degrees C), about 20 minutes.',
    categoryId: '-L4N7j92qDMvS8BbgE5u',
    likes: 0,
    id: 2
  }

  constructor(
    private recipeService: RecipesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.recipe.title);
    // this.route.queryParams
    //   .subscribe(
    //     (params: Params) => {
    //       this.recipe = this.recipeService.getRecipe(+params['id']);
    //     }
    //   );
    //   console.log(this.recipe);

    // this.route.data
    //   .subscribe(
    //     (data: Data) => {
    //       this.recipe = data.recipe;
    //     }
    //   )
  }

  edit() {
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve'
    });
  }

}
