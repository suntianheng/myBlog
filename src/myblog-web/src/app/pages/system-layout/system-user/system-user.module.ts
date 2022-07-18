import { NgModule } from '@angular/core';

import { SystemUserRoutingModule } from './system-user-routing.module';

import { SystemUserComponent } from './system-user.component';


@NgModule({
  imports: [SystemUserRoutingModule],
  declarations: [SystemUserComponent],
  exports: [SystemUserComponent]
})
export class SystemUserModule { }
