import { Component } from '@angular/core';
import { ThemeToggleService } from './services/theme-toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public themeToggleService: ThemeToggleService) {}
}
