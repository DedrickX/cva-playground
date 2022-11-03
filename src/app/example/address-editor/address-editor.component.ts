import { Component, EventEmitter, forwardRef, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormGroup, NG_VALIDATORS,
  NG_VALUE_ACCESSOR, ValidationErrors,
  Validator,
  Validators
} from '@angular/forms';
import { Address } from '../../core/models';
import { CDS } from '../example.module';

@Component({
  selector: 'app-address-editor',
  templateUrl: './address-editor.component.html',
  styleUrls: ['./address-editor.component.scss'],
  changeDetection: CDS,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AddressEditorComponent),
    multi: true
  }, {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => AddressEditorComponent),
    multi: true
  }
  ]
})
export class AddressEditorComponent implements OnInit, ControlValueAccessor, Validator {

  onTouched!: () => void;

  @Output() blur = new EventEmitter();

  formGroup = new FormGroup({
    street: new FormControl('', { validators: [ Validators.required ] }),
    no: new FormControl('', { validators: [ Validators.required ] }),
    city: new FormControl('', { validators: [ Validators.required ] }),
    postalCode: new FormControl('', { validators: [ Validators.required ] }),
  })

  constructor() { }

  ngOnInit(): void {
  }

  writeValue(obj: Address): void {
    if (obj) this.formGroup.setValue(obj, {emitEvent: false});
  }

  registerOnChange(fn: (value: Address) => void): void {
    this.formGroup.valueChanges.subscribe(
      value => fn(value as Address)
    )
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = () => {
      this.blur.emit();
      fn();
    }
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return !this.formGroup.valid ? { addressError: 'Invalid address' } : null;
  }

  registerOnValidatorChange(fn: () => void): void {
    this.formGroup.statusChanges.subscribe(() => fn());
  }
}
