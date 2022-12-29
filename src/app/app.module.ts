import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { CarsComponent } from './components/cars/cars.component';
import { CarComponent } from './components/car/car.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
