import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './shared/materials/material.module';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ToolbarMenuComponent } from './shared/components/toolbar-menu/toolbar-menu.component';




@NgModule({
  declarations: [
    AppComponent,
    ToolbarMenuComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}],
  bootstrap: [AppComponent]
})
export class AppModule { }



// import { ButtonsIconsComponent } from './buttons-icons/buttons-icons.component';
// import { FormFieldInputComponent } from './form-field-input/form-field-input.component';
// import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
// import { TabsComponent } from './tabs/tabs.component';
// import { DatepickerComponent } from './datepicker/datepicker.component';
// import { SnackbarComponent } from './snackbar/snackbar.component';
// import { DialogComponent } from './dialog/dialog.component';
// import { DialogModalComponent } from './dialog/dialog-modal/dialog-modal.component';
// import { DatatableComponent } from './datatable/datatable.component';

/**
 * ButtonsIconsComponent,
    FormFieldInputComponent,
    ProgressSpinnerComponent,
    TabsComponent,
    DatepickerComponent,
    SnackbarComponent,
    DialogComponent,
    DialogModalComponent,
    DatatableComponent
 */
