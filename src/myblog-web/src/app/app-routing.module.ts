import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './pages/all-common/guard/auth.guard';
import { LoginComponent } from
  './pages/all-login/login.component';
import { NotFoundComponent } from './pages/all-common/notfound/notfound.component';
import { BlogIndexComponent } from './pages/blog-index/blog-index.component';
import { SystemLayoutComponent } from './pages/system-layout/system-layout.component';
import { BlogHomeComponent } from './pages/blog-home/blog-home.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'index', pathMatch: 'full'
  },
  {
    path: 'index', component: BlogIndexComponent,
  },
  {
    path: 'home', component: BlogHomeComponent,
  },
  {
    path: 'layout', component: SystemLayoutComponent, canActivate: [AuthGuard],
    children: [
      {
        path: '', loadChildren:
          () => import('./pages/system-layout/system-welcome/welcome.module')
            .then(m => m.WelcomeModule)
      },
      {
        path: 'user', loadChildren:
          () => import('./pages/system-layout/system-user/system-user.module')
            .then(m => m.SystemUserModule)
      },
    ]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '**', component: NotFoundComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
