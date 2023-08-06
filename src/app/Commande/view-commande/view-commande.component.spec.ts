import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCommandeComponent } from './view-commande.component';

describe('ViewCommandeComponent', () => {
  let component: ViewCommandeComponent;
  let fixture: ComponentFixture<ViewCommandeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCommandeComponent]
    });
    fixture = TestBed.createComponent(ViewCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
