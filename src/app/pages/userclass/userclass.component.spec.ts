import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserclassComponent } from './userclass.component';

describe('UserclassComponent', () => {
  let component: UserclassComponent;
  let fixture: ComponentFixture<UserclassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserclassComponent]
    });
    fixture = TestBed.createComponent(UserclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
