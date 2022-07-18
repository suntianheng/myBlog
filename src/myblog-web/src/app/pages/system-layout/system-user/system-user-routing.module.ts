import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemUserComponent } from './system-user.component';

const routes: Routes = [
  { path: '', component: SystemUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemUserRoutingModule { }
