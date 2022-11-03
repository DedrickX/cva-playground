import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaserEditorComponent } from './purchaser-editor.component';

describe('PurchaserEditorComponent', () => {
  let component: PurchaserEditorComponent;
  let fixture: ComponentFixture<PurchaserEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaserEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaserEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
