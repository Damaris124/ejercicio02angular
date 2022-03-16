import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AbuoutComponent } from './abuout/abuout.component';
import { ContacComponent } from './contac/contac.component';



@NgModule({
  declarations: [
    HomeComponent,
    AbuoutComponent,
    ContacComponent
  ],
  exports:[
    HomeComponent,
    AbuoutComponent,
    ContacComponent
  ]
  ,
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
