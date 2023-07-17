import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VehicleInputComponent } from './vehicle-input/vehicle-input.component';
import { VehicleDisplayComponent } from './vehicle-display/vehicle-display.component';
import { VehicleEditComponent } from './vehicle-edit/vehicle-edit.component';
import { VehicleWrapperComponent } from './vehicle-wrapper/vehicle-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    VehicleInputComponent,
    VehicleDisplayComponent,
    VehicleEditComponent,
    VehicleWrapperComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
