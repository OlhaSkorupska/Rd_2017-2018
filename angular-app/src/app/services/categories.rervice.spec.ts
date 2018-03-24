import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CategoriesService } from './categories.service';
import { Category } from '../models/category.model';


const mockResponse = [
    {
       "id": "1",
        "name": 'Soup'
    },
    {
       "id": "2",
        "name": 'Main course'
    },
    {
       "id": "3",
        "name": 'Dessert'
    },        
];

describe('CategoriesService', () => {
  let injector: TestBed;
  let service: CategoriesService;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CategoriesService]
    });
    injector = getTestBed();
    service = injector.get(CategoriesService);
    httpMock = injector.get(HttpTestingController);
  });
  
  describe('#getCategories', () => {
    it('should return an Observable<Categories[]>', () => {
 
      service.getCategories().subscribe(categories => {
        expect(categories.length).toBe(3);
        expect(categories).toEqual(mockResponse);
      });
  
      const req = httpMock.expectOne(`/categories`);
      expect(req.request.method).toBe("GET");
      req.flush(mockResponse);
    });
  });

  afterEach(() => {
    httpMock.verify();
  });  
});


