import { Component, forwardRef, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormGroup, NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  Validators
} from '@angular/forms';
import { Address, Purchaser } from '../../core/models';
import { CDS } from '../example.module';

@Component({
  selector: 'app-purchaser-editor',
  templateUrl: './purchaser-editor.component.html',
  styleUrls: ['./purchaser-editor.component.scss'],
  changeDetection: CDS,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PurchaserEditorComponent),
    multi: true
  },{
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => PurchaserEditorComponent),
    multi: true
  }
  ]
})
export class PurchaserEditorComponent implements OnInit, ControlValueAccessor, Validator {

  onTouched!: () => void;

  formGroup = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('', { validators: [ Validators.required ] }),
    email: new FormControl('', { validators: [ Validators.required, Validators.email ] }),
    address: new FormControl<Address | null>(null),
  })

  constructor() { }

  ngOnInit(): void {
  }

  writeValue(obj: Purchaser): void {
    if (obj) this.formGroup.setValue(obj, { emitEvent: false });
  }

  registerOnChange(fn: (value: Purchaser) => void): void {
    this.formGroup.valueChanges.subscribe(
      value => fn(value as Purchaser)
    )
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return !this.formGroup.valid ? { purchaserError: 'Invalid purchaser' } : null;
  }

  registerOnValidatorChange(fn: () => void): void {
    this.formGroup.statusChanges.subscribe(() => fn());
  }
}
