import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMarqueComponent } from './view-marque.component';

describe('ViewMarqueComponent', () => {
  let component: ViewMarqueComponent;
  let fixture: ComponentFixture<ViewMarqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewMarqueComponent]
    });
    fixture = TestBed.createComponent(ViewMarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
