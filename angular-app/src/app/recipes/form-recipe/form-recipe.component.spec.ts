import {TestBed, ComponentFixture} from '@angular/core/testing';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { FormRecipeComponent } from './form-recipe.component';
import { RecipesService } from '../../services/recipes.service';
import { FormService } from '../../services/form.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

class RouterStub {
    navigateByUrl(url: string) {
      return url;
    }
}

describe('FormRecipeComponent', () => {

  let component: FormRecipeComponent;
  let fixture: ComponentFixture<FormRecipeComponent>;
  const fakeActivatedRoute = {
    snapshot: { data: {} }
  } as ActivatedRoute;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [FormRecipeComponent],
      providers: [ RecipesService, FormService, 
        {provide: ActivatedRoute, useValue: fakeActivatedRoute},
        CategoriesService,
        {provide: Router, useClass: RouterStub},
        HttpClient,
        HttpHandler
        ]
    });

    fixture = TestBed.createComponent(FormRecipeComponent);

    component = fixture.componentInstance;
    component.ngOnInit();
  });

//   it('form invalid when empty', () => {
//       console.log(component.formRecipe.value);
//     expect(component.formRecipe.valid).toBeFalsy();
//   });

//   it('email field validity', () => {
//     let errors = {};
//     let email = component.formRecipe.controls['email'];
//     expect(email.valid).toBeFalsy();

//     // Email field is required
//     errors = email.errors || {};
//     expect(errors['required']).toBeTruthy();

//     // Set email to something
//     email.setValue("test");
//     errors = email.errors || {};
//     expect(errors['required']).toBeFalsy();
//     expect(errors['pattern']).toBeTruthy();

//     // Set email to something correct
//     email.setValue("test@example.com");
//     errors = email.errors || {};
//     expect(errors['required']).toBeFalsy();
//     expect(errors['pattern']).toBeFalsy();
//   });

//   it('password field validity', () => {
//     let errors = {};
//     let password = component.formRecipe.controls['password'];

//     // Email field is required
//     errors = password.errors || {};
//     expect(errors['required']).toBeTruthy();

//     // Set email to something
//     password.setValue("123456");
//     errors = password.errors || {};
//     expect(errors['required']).toBeFalsy();
//     expect(errors['minlength']).toBeTruthy();

//     // Set email to something correct
//     password.setValue("123456789");
//     errors = password.errors || {};
//     expect(errors['required']).toBeFalsy();
//     expect(errors['minlength']).toBeFalsy();
//   });

//   it('submitting a form emits a user', () => {
//     expect(component.formRecipe.valid).toBeFalsy();
//     component.formRecipe.controls['email'].setValue("test@test.com");
//     component.formRecipe.controls['password'].setValue("123456789");
//     expect(component.formRecipe.valid).toBeTruthy();

//     let user: User;
//     // Subscribe to the Observable and store the user in a local variable.
//     component.loggedIn.subscribe((value) => user = value);

//     // Trigger the login function
//     component.login();

//     // Now we can check to make sure the emitted value is correct
//     expect(user.email).toBe("test@test.com");
//     expect(user.password).toBe("123456789");
//   });
})
;