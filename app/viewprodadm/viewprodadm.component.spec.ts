import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprodadmComponent } from './viewprodadm.component';

describe('ViewprodadmComponent', () => {
  let component: ViewprodadmComponent;
  let fixture: ComponentFixture<ViewprodadmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewprodadmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewprodadmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
