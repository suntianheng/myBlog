import { NgModule } from '@angular/core';
import { SharedModule } from '../all-common/shared.module';
import { BlogHomeComponent } from './blog-home.component';

@NgModule({
  imports: [SharedModule],
  declarations: [BlogHomeComponent],
  exports: [BlogHomeComponent]
})
export class BlogHomeModule { }
