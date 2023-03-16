import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorderuserComponent } from './editorderuser.component';

describe('EditorderuserComponent', () => {
  let component: EditorderuserComponent;
  let fixture: ComponentFixture<EditorderuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorderuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorderuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
