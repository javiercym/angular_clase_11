import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarComponent } from './validar/validar/validar.component';

const routes: Routes = [
  {path:'**',component: ValidarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
