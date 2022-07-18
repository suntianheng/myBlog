import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemLayoutComponent } from './system-layout.component';

const routes: Routes = [
  {
    path: '',
    component: SystemLayoutComponent,
  },
];




@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SystemLayoutRoutingModule { }
