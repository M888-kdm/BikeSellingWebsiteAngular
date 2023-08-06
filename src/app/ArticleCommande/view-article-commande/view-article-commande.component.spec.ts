import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewArticleCommandeComponent } from './view-article-commande.component';

describe('ViewArticleCommandeComponent', () => {
  let component: ViewArticleCommandeComponent;
  let fixture: ComponentFixture<ViewArticleCommandeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewArticleCommandeComponent]
    });
    fixture = TestBed.createComponent(ViewArticleCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
