import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderMainComponent } from './header-main/header-main.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesItemComponent } from './recipes-item/recipes-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderMainComponent,
    HeaderMenuComponent,
    MenuItemComponent,
    RecipesListComponent,
    RecipesItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
