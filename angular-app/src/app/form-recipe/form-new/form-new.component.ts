import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-new',
  templateUrl: './form-new.component.html',
  styleUrls: ['./form-new.component.sass']
})
export class FormNewComponent implements OnInit{
  @Output() operation = new EventEmitter();

  ngOnInit() {
    this.operation.emit('Add');    
  }
}
