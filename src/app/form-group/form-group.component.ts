import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: [ './form-group.component.scss' ],
})
export class FormGroupComponent implements OnInit {

  form = new FormGroup({
    title: new FormControl('Mr.', {
      updateOn: 'blur',
    }),
    name: new FormControl('', {
      validators: Validators.required,
      updateOn: 'change',
    }),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(12),
      Validators.maxLength(100),
    ]),
  }, {
    updateOn: 'submit',
  });

  constructor(){
  }

  doNothing(){
  }

  ngOnInit(){
  }

}
