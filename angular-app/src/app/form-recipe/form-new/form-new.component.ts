import { Component, OnInit, ViewChild } from '@angular/core';
import { FormRecipeComponent } from '../form-recipe.component';

@Component({
  selector: 'app-form-new',
  templateUrl: './form-new.component.html',
  styleUrls: ['./form-new.component.sass']
})
export class FormNewComponent implements OnInit{
  @ViewChild('operation')
  private operation: FormRecipeComponent;
   
  ngOnInit() {
    this.operation.notifyMe('Add');
  }
}
