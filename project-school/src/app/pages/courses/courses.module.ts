import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { SharedModule } from 'src/app/shared/models/shared.modules';
import { CoursesMaterialModule } from 'src/app/shared/materials/courses-mat.module';


@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    CoursesMaterialModule,
    SharedModule,
  ]
})
export class CoursesModule { }
