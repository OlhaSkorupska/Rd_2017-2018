import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.css']
})
export class HeaderMainComponent {
  title = 'Recipes';
  choosedMenu: string;

  @Output() selectedMenu = new EventEmitter();

  constructor() {
    this.choosedMenu = 'All Recipes';
  }

  chooseMenu(value: string) {
    this.selectedMenu.emit(value);    
  }    
}