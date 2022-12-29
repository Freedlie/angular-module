import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ICar} from "../../interfaces";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;

  @Output()
  formValue = new EventEmitter<FormGroup>()

  @Input()
  uCar: ICar

  constructor() {
    this._initForm();
  }

  ngOnInit(): void {
  }

  _initForm():void{
    this.form = new FormGroup({
      model: new FormControl(null,[Validators.required]),
      price: new FormControl(null,[Validators.required, Validators.min(0),Validators.max(10000000)]),
      year: new FormControl(null,[Validators.required]),

    })
  }

  save() {
    this.formValue.emit(this.form.value)
  }
}
