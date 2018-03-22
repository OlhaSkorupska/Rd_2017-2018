import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HeaderMainComponent } from './header-main.component';


@NgModule({
  declarations: [
    HeaderMenuComponent,
    HeaderMainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeaderMainModule {}