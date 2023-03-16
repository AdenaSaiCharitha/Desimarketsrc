import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserorderlistComponent } from './userorderlist.component';

describe('UserorderlistComponent', () => {
  let component: UserorderlistComponent;
  let fixture: ComponentFixture<UserorderlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserorderlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserorderlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
