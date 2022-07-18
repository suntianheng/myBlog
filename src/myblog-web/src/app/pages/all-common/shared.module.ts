import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './notfound/notfound.component';
import { CommonModule } from '@angular/common';
import { IconsProviderModule } from '../../icons-provider.module';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';

import { DragDropModule } from '@angular/cdk/drag-drop';

const nzModule = [
  NzLayoutModule,
  NzMenuModule,
  NzFormModule,
  NzInputModule,
  NzButtonModule,
  NzCheckboxModule,
  NzEmptyModule,
  NzDropDownModule,
  NzResultModule,
  NzImageModule,
  NzGridModule,
  NzCardModule,
  NzAvatarModule,
  NzDividerModule,
  NzDrawerModule,
  NzDatePickerModule,
  NzTimePickerModule
];

const materialModule = [DragDropModule]

const ngModule = [
  /** 导入 ng-zorro-antd-mobile 模块 **/
  NgZorroAntdMobileModule,

  BrowserAnimationsModule,
  FormsModule,
  HttpClientModule,
  ReactiveFormsModule,
  IconsProviderModule
]

@NgModule({
  imports: [CommonModule, ...nzModule, ...materialModule, ...ngModule],
  declarations: [NotFoundComponent,],
  exports: [NotFoundComponent, CommonModule, ...nzModule, ...materialModule, ...ngModule]
})
export class SharedModule { }
