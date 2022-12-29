import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICar} from "../../interfaces";
import {CarService} from "../../services";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars:ICar[];
  updateCar: ICar;

  @Output()
  updateCarForForm = new EventEmitter<ICar>()

  @Input()
  form: FormGroup;


  constructor(private carService:CarService) {
    this.save();
    this.updateCarForForm.emit(this.updateCar)

  }

  ngOnInit(): void {
    this.carService.getAll().subscribe(value => this.cars = value);
  }



  save():void {
    console.log(this.form);
    if(!this.updateCar){
      this.carService.create(this.form.value).subscribe(value => {
        this.cars.push(value)
      })
    }else{
      this.carService.updateById(this.updateCar.id, this.form.value).subscribe(value => {
        const car = this.cars.find(car=> car.id === this.updateCar?.id);
        Object.assign(car!,value);
        // this.updateCar = null;
      })
    }
    this.form.reset();

  }

  lift(car: ICar) {
    this.updateCar = car
    this.form.setValue({
      model: car.model,
      price: car.price,
      year: car.year
    })
  }

  liftForDelete(id: number) {
    this.carService.deleteById(id).subscribe(() => {
      const index = this.cars.findIndex(car => car.id === id);
      this.cars.splice(index,1);
    })
  }
}
