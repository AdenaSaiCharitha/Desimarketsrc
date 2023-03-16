import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproduserComponent } from './viewproduser.component';

describe('ViewproduserComponent', () => {
  let component: ViewproduserComponent;
  let fixture: ComponentFixture<ViewproduserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewproduserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewproduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
