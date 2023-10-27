import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserclassmsgComponent } from './userclassmsg.component';

describe('UserclassmsgComponent', () => {
  let component: UserclassmsgComponent;
  let fixture: ComponentFixture<UserclassmsgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserclassmsgComponent]
    });
    fixture = TestBed.createComponent(UserclassmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
