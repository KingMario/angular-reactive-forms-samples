import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: [ './switch.component.scss' ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true,
    },
  ],
})
export class SwitchComponent implements ControlValueAccessor {
  @Input() label = 'switch';

  @Input() set value(value: boolean){
    this._value = value;
    this.onChange(value);
    this.onTouched();
  }

  get value(): boolean{
    return this._value;
  }

  private _value: boolean;

  onChange = (_: boolean) => {
  };
  onTouched = () => {
  };

  constructor(){
  }

  registerOnChange(fn){
    this.onChange = fn;
  }

  writeValue(value){
    if (value) {
      this.value = value;
    }
  }

  registerOnTouched(fn){
    this.onTouched = fn;
  }

  switch(){
    this.value = !this.value;
  }
}
