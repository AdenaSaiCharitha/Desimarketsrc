import { TestBed } from '@angular/core/testing';

import { ProductsadService } from './productsad.service';

describe('ProductsadService', () => {
  let service: ProductsadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
