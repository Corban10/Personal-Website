import { Component, OnInit } from '@angular/core';
import { ThemeToggleService } from '../services/theme-toggle.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;

  constructor(public themeToggleService: ThemeToggleService) {}

  ngOnInit(): void {}

  validateForm(): boolean {
    if (!this.name || this.name.length < 3) return false;
    if (!this.email || !this.validateEmail(this.email)) return false;
    if (!this.message) return false;
    return true;
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  processForm() {
    const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
    if (this.validateForm()) alert(allInfo);
    else alert('fail');
  }
}
