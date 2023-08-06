import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArticleCommandeComponent } from './edit-article-commande.component';

describe('EditArticleCommandeComponent', () => {
  let component: EditArticleCommandeComponent;
  let fixture: ComponentFixture<EditArticleCommandeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditArticleCommandeComponent]
    });
    fixture = TestBed.createComponent(EditArticleCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
