import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiRestPage } from './apiRest.page';
// import {NgxMasonryModule} from 'ngx-masonry';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: ApiRestPage}]),
        // NgxMasonryModule
    ],
  declarations: [ApiRestPage]
})
export class ApiRestPageModule {}
