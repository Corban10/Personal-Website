import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeToggleService {
  darkMode: boolean;
  constructor() {}
  toggleTheme() {
    this.darkMode = !this.darkMode;
  }
  getTheme() {
    return this.darkMode ? 'dark-mode' : 'light-mode';
  }
  getOppsiteTheme() {
    return !this.darkMode ? 'dark-mode' : 'light-mode';
  }
}
