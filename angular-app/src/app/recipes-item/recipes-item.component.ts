import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { AngularFontAwesomeService } from 'angular-font-awesome';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss']
})
export class RecipesItemComponent implements OnInit {

  @Input() recipeItem: Recipe;

  ngOnInit() {
  }

}
