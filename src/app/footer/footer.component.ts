import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  navs = [
    {
      text: 'Company',
      route: '/',
      menu: 'menu'
    },
    {
      text: 'products',
      route: '/products',
      menu: 'menu'
    },
    {
      text: 'contact',
      route: '/contact',
      menu: 'menu'
    }
  ]
}
