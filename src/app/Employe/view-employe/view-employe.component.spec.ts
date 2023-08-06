import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeComponent } from './view-employe.component';

describe('ViewEmployeComponent', () => {
  let component: ViewEmployeComponent;
  let fixture: ComponentFixture<ViewEmployeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewEmployeComponent]
    });
    fixture = TestBed.createComponent(ViewEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
