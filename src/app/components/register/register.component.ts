import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {RegisterFormComponent} from "../register-form/register-form.component";

@Component({
  selector: 'app-register',
  template: '',
})
export class RegisterComponent implements OnInit {
  form: any;

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
    this.dialog.open(RegisterFormComponent,{
      disableClose:true,
      hasBackdrop: false
    })
  }

}
