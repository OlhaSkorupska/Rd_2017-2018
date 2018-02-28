import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DislikeButtonComponent } from './dislike-button.component';

describe('DislikeButtonComponent', () => {
  let component: DislikeButtonComponent;
  let fixture: ComponentFixture<DislikeButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DislikeButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DislikeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
