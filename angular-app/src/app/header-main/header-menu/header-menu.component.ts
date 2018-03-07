import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent {
  menuItems = [{title: 'recipes', description: 'All Recipes'}, {title: 'favorites', description: 'Favorites'},
      {title: 'purchases', description: 'Purchases'}];
  menuItem: string;

  @Output() selectedMenu = new EventEmitter();  

  chooseMenu(value: string) {
    this.selectedMenu.emit(value);    
  }    
}