import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import { Subscription } from 'rxjs';

import { lineSeparator, preSource, sourceAssignmentRegExp, utilImportsRegExp } from '../sourceUtils';

declare const require;

@Component({
  selector: 'app-nested-form-group',
  templateUrl: './nested-form-group.component.html',
  styleUrls: [ './nested-form-group.component.scss' ],
})
export class NestedFormGroupComponent implements OnInit, OnDestroy {

  readonly host = new FormControl('localhost', Validators.required);
  readonly port = new FormControl(8080, [
    Validators.required,
    (c: AbstractControl) => {
      if (isNaN(parseInt(c.value, 10))) {
        return {
          notNumbric: true,
        };
      }

      return null;
    },
  ]);
  readonly endpoint = new FormGroup({
    host: this.host,
    port: this.port,
  });

  readonly modifyCredentials = new FormControl(false, {
    updateOn: 'blur',
  });

  readonly username = new FormControl({
    value: '',
    disabled: true,
  }, [
    Validators.minLength(3),
  ]);
  readonly password = new FormControl({
    value: '',
    disabled: true,
  });

  readonly credentials = new FormGroup({
    username: this.username,
    password: this.password,
  }, {
    updateOn: 'blur',
  });

  readonly form = new FormGroup({
    endpoint: this.endpoint,
    modifyCredentials: this.modifyCredentials,
    credentials: this.credentials,
  });

  source = require('!raw-loader!./nested-form-group.component.ts')
      .replace(utilImportsRegExp, '')
      .replace(sourceAssignmentRegExp, '') + lineSeparator +
    require('./nested-form-group.component.html')
      .replace(preSource, '');

  _subscription: Subscription;

  constructor () {}

  ngOnInit () {
    this._subscription = this.modifyCredentials.valueChanges.subscribe((modifyCredentials) => {
      if (modifyCredentials) {
        this.credentials.enable();
      } else {
        this.credentials.disable();
      }
    });
  }

  ngOnDestroy () {
    this._subscription.unsubscribe();
  }

}
