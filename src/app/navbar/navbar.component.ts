import { Component, OnInit } from '@angular/core';
import { links } from '../links';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  links: {}[];
  linkClass: string;
  constructor() {}

  ngOnInit(): void {
    this.links = links;
    this.linkClass = 'test';
  }
}
