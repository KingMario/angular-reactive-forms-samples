import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, AbstractControl } from '@angular/forms';

import { lineSeparator, preSource, sourceAssignmentRegExp, utilImportsRegExp } from '../sourceUtils';

declare const require;

@Component({
  selector: 'app-hero-detail',
  templateUrl: './single-form-control.component.html',
  styleUrls: [ './single-form-control.component.scss' ],
})
export class SingleFormControlComponent implements OnInit {

  id = new FormControl('', {
    validators:
      [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(7),
        Validators.pattern(/^[A-Z]\d{3,6}$/),
        (c: AbstractControl) => {
          if (isNaN(parseInt(c.value.substr(1), 10))) {
            return {
              error: true,
            };
          }

          return null;
        },
        (c: AbstractControl) => {
          const value = parseInt(c.value.substr(1), 10);
          const min = 900;
          if (value < min) {
            return {
              tooSmall: {
                minimal: min,
                actualValue: value,
              },
            };
          }

          return null;
        },
        (c: AbstractControl) => {
          const value = parseInt(c.value.substr(1), 10);
          const max = 900000;
          if (value > max) {
            return {
              tooLarge: {
                maximal: max,
                actualValue: value,
              },
            };
          }

          return null;
        },
      ],
  });

  source = require('!raw-loader!./single-form-control.component.ts')
      .replace(utilImportsRegExp, '')
      .replace(sourceAssignmentRegExp, '') + lineSeparator +
    require('!raw-loader!./single-form-control.component.html')
      .replace(preSource, '');

  constructor () {}

  ngOnInit () {}

}
