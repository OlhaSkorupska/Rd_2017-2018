import { Component, Output, OnInit, Input, EventEmitter } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { RecipesService } from './services/recipes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  choosedMenu: string;

  constructor() {
    this.choosedMenu = 'All Recipes';
  }

  chooseMenu(value) {
    this.choosedMenu = value;
  }        
}