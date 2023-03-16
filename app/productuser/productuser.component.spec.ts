import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductuserComponent } from './productuser.component';

describe('ProductuserComponent', () => {
  let component: ProductuserComponent;
  let fixture: ComponentFixture<ProductuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
