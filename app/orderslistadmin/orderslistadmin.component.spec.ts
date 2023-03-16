import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderslistadminComponent } from './orderslistadmin.component';

describe('OrderslistadminComponent', () => {
  let component: OrderslistadminComponent;
  let fixture: ComponentFixture<OrderslistadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderslistadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderslistadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
