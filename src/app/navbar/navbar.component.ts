import { Component, OnInit, HostListener } from '@angular/core';
import { links } from '../links';
import { throttleTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  links: {}[];
  isMobile: boolean;
  private debounceMobileCheck: Subject<any> = new Subject<any>();
  constructor() {
    this.debounceMobileCheck
      .asObservable()
      .pipe(throttleTime(100))
      .subscribe(innerWidth => {
        this.detectMob(innerWidth);
      });
  }
  ngOnInit(): void {
    this.links = links;
    this.detectMob(window.innerWidth);
  }
  detectMob(innerWidth): void {
    this.isMobile = innerWidth <= 500;
  }
  @HostListener('window:resize', ['$event.target'])
  public onResize(target): void {
    this.debounceMobileCheck.next(target.innerWidth);
  }
}
