import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ICar} from "./interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-module';

  @Input()
  formForCar:FormGroup

  @Input()
  uCar:ICar

  getFormValue(form: FormGroup) {
    this.formForCar = form;
  }

  getUpdateCar(car: ICar) {
    this.uCar = car
  }
}
