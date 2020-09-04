import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  darkMode: boolean;
  constructor() {}
  checkValue() {
    this.darkMode = !this.darkMode;
    console.log(this.darkMode);
  }
}
