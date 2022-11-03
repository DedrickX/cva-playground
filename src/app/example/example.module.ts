import { ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { PurchaserEditorComponent } from './purchaser-editor/purchaser-editor.component';
import { AddressEditorComponent } from './address-editor/address-editor.component';

export const CDS = ChangeDetectionStrategy.Default

@NgModule({
  declarations: [
    DetailComponent,
    PurchaserEditorComponent,
    AddressEditorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    DetailComponent
  ]
})
export class ExampleModule { }
