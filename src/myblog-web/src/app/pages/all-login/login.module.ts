import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SharedModule } from '../all-common/shared.module';


@NgModule({
  imports: [LoginRoutingModule, SharedModule],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule { }
