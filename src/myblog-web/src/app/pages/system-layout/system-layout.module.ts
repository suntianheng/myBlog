import { NgModule } from '@angular/core';
import { SystemLayoutRoutingModule } from './system-layout-routing.module';
import { SystemLayoutComponent } from './system-layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { SharedModule } from '../all-common/shared.module';

@NgModule({
    imports: [
        NzLayoutModule,
        SharedModule,
        
        SystemLayoutRoutingModule,
    ],
    declarations: [SystemLayoutComponent],
    exports: [SystemLayoutComponent]
})
export class SystemLayoutModule { }
