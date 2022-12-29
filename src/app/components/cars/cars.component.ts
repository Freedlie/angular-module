import { Component, OnInit } from '@angular/core';
import {ICar} from "../../interfaces";
import {CarService} from "../../services";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars:ICar[];
  form: FormGroup;

  constructor(private carService:CarService) {
    this._initForm();
  }

  ngOnInit(): void {
    this.carService.getAll().subscribe(value => this.cars = value);
  }

  _initForm():void{
    this.form = new FormGroup({
      model: new FormControl(),
      price: new FormControl(),
      year: new FormControl(),

    })
  }

  save():void {

  }
}
