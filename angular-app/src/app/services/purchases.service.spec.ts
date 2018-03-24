import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PurchasesService } from './purchases.service';
import { Purchase } from '../models/purchase.model';
import { RecipesService } from './recipes.service';


const mockResponse = [
    {
        "id": "1",
        "purchases": 'sugar'
    },
    {
        "id": "2",
        "purchases": 'oil'
    },
    {
        "id": "3",
        "purchases": 'salt'
    },        
];

const mockResponseDelete = [
    {
        "id": "1",
        "purchases": 'sugar'
    },
    {
        "id": "2",
        "purchases": 'oil'
    }      
];

const purchase = 'salt';

describe('PurchasesService', () => {
  let injector: TestBed;
  let service: PurchasesService;
  let recipeService: RecipesService  
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PurchasesService, RecipesService]
    });
    injector = getTestBed();
    service = injector.get(PurchasesService);
    httpMock = injector.get(HttpTestingController);
  });
  
  describe('#getPurchases', () => {
    it('should return an Observable<Purchases[]>', () => {
 
      service.getPurchases().subscribe(purchases => {
        expect(purchases.length).toBe(3);
        expect(purchases).toEqual(mockResponse);
      });
  
      const req = httpMock.expectOne(`/purchases`);
      expect(req.request.method).toBe("GET");
      req.flush(mockResponse);
    });
  });

  afterEach(() => {
    httpMock.verify();
  });  
});


