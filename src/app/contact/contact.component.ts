import { Component, OnInit } from '@angular/core';
import { ThemeToggleService } from '../services/theme-toggle.service';
import { catchError } from 'rxjs/operators';
import url from '../helpers/url';

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

  resetForm(alertMsg: string) {
    this.name = undefined;
    this.email = undefined;
    this.message = undefined;
    alert(alertMsg);
    // location.reload();
  }

  getPostBody = (): any => {
    return {
      name: this.name,
      email: this.email,
      message: this.message
    };
  };

  getFormData = (): any => {
    let formData = new FormData();
    formData.append('name', this.name);
    formData.append('email', this.email);
    formData.append('message', this.message);
    return formData;
  };

  processForm() {
    const formData = this.getFormData();
    fetch(`${url}/api/email/`, {
      method: 'POST',
      body: formData
    })
      .then(res => {
        if (res.ok) {
          this.resetForm('Sent! Thank you.');
        } else throw res;
      })
      .catch(error => {
        this.resetForm("Error, couldn't be sent");
        catchError(error);
      });
  }
}
