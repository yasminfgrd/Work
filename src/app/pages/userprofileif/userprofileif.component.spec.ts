import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofileifComponent } from './userprofileif.component';

describe('UserprofileifComponent', () => {
  let component: UserprofileifComponent;
  let fixture: ComponentFixture<UserprofileifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserprofileifComponent]
    });
    fixture = TestBed.createComponent(UserprofileifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
