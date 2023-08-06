import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMagasinComponent } from './edit-magasin.component';

describe('EditMagasinComponent', () => {
  let component: EditMagasinComponent;
  let fixture: ComponentFixture<EditMagasinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMagasinComponent]
    });
    fixture = TestBed.createComponent(EditMagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
