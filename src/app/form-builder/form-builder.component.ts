import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder){
  }

  paymentChanged(){
    if (!this.form.value.payment) {
      this.form.get('creditCard').reset('', {
        disabled: true,
      });
    } else {
      this.form.get('creditCard').enable();
    }
  }

  ngOnInit(){
  }

}
