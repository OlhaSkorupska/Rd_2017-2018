import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderMainComponent } from './header-main/header-main.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesItemComponent } from './recipes-item/recipes-item.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormRecipeComponent } from './form-recipe/form-recipe.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMainComponent,
    HeaderMenuComponent,
    MenuItemComponent,
    RecipesListComponent,
    RecipesItemComponent,
    FormRecipeComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
