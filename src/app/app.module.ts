import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxTrimDirectiveModule } from 'ngx-trim-directive';
import { NgxUpperCaseDirectiveModule } from 'ngx-upper-case-directive';
import { NgxCleaveDirectiveModule } from 'ngx-cleave-directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleFormControlComponent } from './single-form-control/single-form-control.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { NestedFormGroupComponent } from './nested-form-group/nested-form-group.component';
import { SwitchComponent } from './switch/switch.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleFormControlComponent,
    FormGroupComponent,
    NestedFormGroupComponent,
    SwitchComponent,
    FormBuilderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxTrimDirectiveModule,
    NgxUpperCaseDirectiveModule,
    NgxCleaveDirectiveModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
