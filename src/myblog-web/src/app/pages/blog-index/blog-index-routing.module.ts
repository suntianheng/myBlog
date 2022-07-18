import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogIndexComponent } from './blog-index.component';

const routes: Routes = [
  { path: '', component: BlogIndexComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogIndexRoutingModule { }
