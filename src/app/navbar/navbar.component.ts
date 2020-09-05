import { Component, OnInit, HostListener } from '@angular/core';
import { links } from '../links';
import { throttleTime } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ThemeToggleService } from '../services/theme-toggle.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  links: {}[];
  isMobile: boolean;
  menuToggled: boolean;
  currentWidth: number;
  private debounceMobileCheck: Subject<any> = new Subject<any>();
  constructor(public themeToggleService: ThemeToggleService) {
    this.debounceMobileCheck
      .asObservable()
      .pipe(throttleTime(100))
      .subscribe(innerWidth => {
        this.detectMob(innerWidth);
      });
  }
  ngOnInit(): void {
    this.links = links;
    this.currentWidth = window.innerWidth;
    this.detectMob(this.currentWidth);
  }
  toggleMenu() {
    this.menuToggled = !this.menuToggled;
  }
  detectMob(innerWidth): void {
    const currentIsMobile = innerWidth;
    if (currentIsMobile > 500) {
      this.menuToggled = false;
      this.isMobile = false;
    } else {
      this.isMobile = true;
    }
  }
  @HostListener('window:resize', ['$event.target'])
  public onResize(target): void {
    this.debounceMobileCheck.next(target.innerWidth);
  }
}
