import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { getApiModel, getEmptyModel, Purchaser } from '../../core/models';
import { CDS } from '../example.module';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: CDS,
})
export class DetailComponent implements OnInit {

  formGroup = new FormGroup({
    purchaser: new FormControl<Purchaser | null>(null),
    totalPrice: new FormControl<number>(0),
  });

  constructor(
  ) { }

  ngOnInit(): void {
    // this.loadData();
  }

  loadData() {
    this.formGroup.setValue(getApiModel());
  }

  clearData() {
    this.formGroup.setValue(getEmptyModel());
  }

  save() {
    if (this.formGroup.invalid) {
      alert('Invalid!');
    } else {
      alert('Valid...');
    }
    this.formGroup.markAllAsTouched();
  }
}
