import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SystemLayoutModule } from './pages/system-layout/system-layout.module';
import { BlogIndexModule } from './pages/blog-index/blog-index.module';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';

import { AuthInterceptor } from './pages/all-common/auth-interceptor/auth-interceptor';
import { LoginModule } from './pages/all-login/login.module';
import { SharedModule } from './pages/all-common/shared.module';
import { BlogHomeModule } from './pages/blog-home/blog-home.module';




registerLocaleData(en);




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    SharedModule,
    BlogIndexModule,
    BlogHomeModule,
    SystemLayoutModule,
    LoginModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
