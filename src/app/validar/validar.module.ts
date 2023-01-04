import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidarComponent } from './validar/validar.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ValidarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ValidarComponent
  ]
})
export class ValidarModule { }
