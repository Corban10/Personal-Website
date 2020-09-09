import { Injectable } from '@angular/core';
import randomColor from '../helpers/color';

@Injectable({
  providedIn: 'root'
})
export class ThemeToggleService {
  darkMode: boolean = true;
  constructor() {
    this.initTheme();
    this.setTitleColours();
    setInterval(() => {
      this.setTitleColours();
    }, 1000);
  }
  setTitleColours() {
    const titles = document.querySelectorAll('H1, H2, H3, H4, H5, H6'); //, H5, H6
    for (let i = 0; i < titles.length; i++) {
      (titles[i] as HTMLAnchorElement).style.color = randomColor({
        luminosity: this.darkMode ? 'bright' : 'dark'
      });
    }
  }
  initTheme() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.add(this.getTheme());
  }
  toggleTheme() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove(this.getTheme());
    this.darkMode = !this.darkMode;
    body.classList.add(this.getTheme());
  }
  getTheme() {
    return this.darkMode ? 'dark-mode' : 'light-mode';
  }
  getOppositeTheme() {
    return !this.darkMode ? 'dark-mode' : 'light-mode';
  }
}
