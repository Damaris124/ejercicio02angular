import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  rutas = [
    {
    name: 'Area Personal',
    path: '/home'
    }, 
    {
    name: 'Lugar donde Naci',
    path: '/contac'
    },
    {
      name: 'Metas',
      path: '/abuout'
      }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
