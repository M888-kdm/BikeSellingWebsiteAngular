import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMagasinComponent } from './view-magasin.component';

describe('ViewMagasinComponent', () => {
  let component: ViewMagasinComponent;
  let fixture: ComponentFixture<ViewMagasinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewMagasinComponent]
    });
    fixture = TestBed.createComponent(ViewMagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
