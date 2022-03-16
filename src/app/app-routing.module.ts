import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AbuoutComponent } from './pages/abuout/abuout.component';
import { ContacComponent } from './pages/contac/contac.component';

const routes: Routes = [
  {
    path: 'home',
    component:HomeComponent
    },
    {
      path: 'abuout',
      component: AbuoutComponent
    },
    {
      path: 'contac',
      component: ContacComponent
      },
      {
        path: '**',
        redirectTo: 'home'
        }
     
];



@NgModule({
  declarations: [],
  exports:[
    RouterModule
    ],
   
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
