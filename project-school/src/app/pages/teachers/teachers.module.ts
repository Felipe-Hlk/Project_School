import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersComponent } from './teachers.component';
import { SharedModule } from 'src/app/shared/models/shared.modules';
import { TeachersMaterialModule } from 'src/app/shared/materials/teachers-mat.module';


@NgModule({
  declarations: [
    TeachersComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    TeachersMaterialModule,
    SharedModule
  ]
})
export class TeachersModule { }
