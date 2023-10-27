import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesclassComponent } from './featuresclass.component';

describe('FeaturesclassComponent', () => {
  let component: FeaturesclassComponent;
  let fixture: ComponentFixture<FeaturesclassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturesclassComponent]
    });
    fixture = TestBed.createComponent(FeaturesclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
