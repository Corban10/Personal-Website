import { Component, OnInit } from '@angular/core';
import { links } from '../links';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  links: {}[];
  isMobile: boolean;
  constructor() {}

  ngOnInit(): void {
    this.links = links;
    this.isMobile = true;
  }
}
