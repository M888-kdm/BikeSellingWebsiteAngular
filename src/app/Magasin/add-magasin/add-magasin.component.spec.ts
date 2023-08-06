import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMagasinComponent } from './add-magasin.component';

describe('AddMagasinComponent', () => {
  let component: AddMagasinComponent;
  let fixture: ComponentFixture<AddMagasinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMagasinComponent]
    });
    fixture = TestBed.createComponent(AddMagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
