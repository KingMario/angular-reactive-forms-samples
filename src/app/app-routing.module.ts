import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleFormControlComponent } from './single-form-control/single-form-control.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { NestedFormGroupComponent } from './nested-form-group/nested-form-group.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';

const routes: Routes = [
  {
    path: 'single',
    component: SingleFormControlComponent,
  },
  {
    path: 'form-group',
    component: FormGroupComponent,
  },
  {
    path: 'nested-form-group',
    component: NestedFormGroupComponent,
  },
  {
    path: 'form-builder',
    component: FormBuilderComponent,
  },
  {
    path: '**',
    redirectTo: 'single',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
