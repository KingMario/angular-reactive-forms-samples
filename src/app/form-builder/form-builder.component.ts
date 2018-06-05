import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { lineSeparator, preSource, sourceAssignmentRegExp, utilImportsRegExp } from '../sourceUtils';

declare const require;

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: [ './form-builder.component.scss' ],
})
export class FormBuilderComponent implements OnInit {

  form = this.formBuilder.group({
    payment: true,
    creditCard: '',
  });

  source = require('!raw-loader!./form-builder.component.ts')
      .replace(utilImportsRegExp, '')
      .replace(sourceAssignmentRegExp, '') + lineSeparator +
    require('./form-builder.component.html')
      .replace(preSource, '');

  constructor (private formBuilder: FormBuilder) {}

  paymentChanged () {
    if (!this.form.value.payment) {
      this.form.get('creditCard').reset({
        value: '',
        disabled: true,
      });
    } else {
      this.form.get('creditCard').enable();
    }
  }

  ngOnInit () {
  }

}
