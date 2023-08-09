import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/models/shared.modules';
import { DashboardMaterialModule } from 'src/app/shared/materials/dashboard-mat.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DashboardMaterialModule,
    SharedModule,

  ]
})
export class DashboardModule { }
