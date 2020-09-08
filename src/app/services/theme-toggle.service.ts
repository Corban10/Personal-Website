import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeToggleService {
  darkMode: boolean;
  constructor() {
    this.initTheme();
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
}
