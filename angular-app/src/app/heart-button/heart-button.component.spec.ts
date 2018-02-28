import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartButtonComponent } from './heart-button.component';

describe('HeartButtonComponent', () => {
  let component: HeartButtonComponent;
  let fixture: ComponentFixture<HeartButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeartButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeartButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
