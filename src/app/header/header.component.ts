import {Component, OnInit} from '@angular/core';

interface MenuLink {
  text: string;
  route: string;
  sub?: MenuLink[];
  visible?: boolean;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  classHead = false;
  over: any;

  windowScroll(event: any): void {
    this.classHead = scrollY > 100;
  }

  classNavMenu = false;
  spanRotate = false;

  toggle() {
    this.classNavMenu = !this.classNavMenu;
    this.spanRotate = !this.spanRotate;
  }


  navs: MenuLink[] = [
    {
      text: 'Company',
      route: '/',
    },
    {
      text: 'products',
      route: '/products',

      sub: [
        {
          text: 'item1',
          route: '/products',
        },
        {
          text: 'item2',
          route: '/products',
        },
        {
          text: 'item3',
          route: '/products',
        }]
    },
    {
      text: 'contact',
      route: '/contact',
    }
  ]

}
