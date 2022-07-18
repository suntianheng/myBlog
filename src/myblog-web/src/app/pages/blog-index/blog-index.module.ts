import { NgModule } from '@angular/core';
import { SharedModule } from '../all-common/shared.module';
import { BlogIndexComponent } from './blog-index.component';

@NgModule({
  imports: [SharedModule],
  declarations: [BlogIndexComponent],
  exports: [BlogIndexComponent]
})
export class BlogIndexModule { }
