import { NgModule } from '@angular/core';
import { ToolbarTitleComponent } from '../components/toolbar-title/toolbar-title.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports:[
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],

  declarations:[
    ToolbarTitleComponent,
    
  ],

  exports: [
    ToolbarTitleComponent,
    ReactiveFormsModule
  ]
})

export class SharedModule { }
