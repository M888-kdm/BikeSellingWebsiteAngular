import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArticleCommandeComponent } from './add-article-commande.component';

describe('AddArticleCommandeComponent', () => {
  let component: AddArticleCommandeComponent;
  let fixture: ComponentFixture<AddArticleCommandeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddArticleCommandeComponent]
    });
    fixture = TestBed.createComponent(AddArticleCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
