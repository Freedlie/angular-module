import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {CarsComponent} from "./components/cars/cars.component";
import {AuthGuard} from "./guards";
import {CarResolver} from "./services/resolvers/car.resolver";

const routes: Routes = [
  {
    path:'', component: MainLayoutComponent, children:[
      {path:'',redirectTo:'login',pathMatch:'full'},
      {path:'login', component:LoginComponent},
      {path:'register', component:RegisterComponent},
      {path:'cars',canActivate:[AuthGuard],runGuardsAndResolvers:'pathParamsOrQueryParamsChange' , resolve:CarResolver, component:CarsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }