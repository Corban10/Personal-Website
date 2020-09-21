import { Component, OnInit } from '@angular/core';
import { SvgIconRegistryService } from 'angular-svg-icon';
import { SocialService } from '../services/social.service';
import { Subscription } from 'rxjs';
import { ISocial } from '../interfaces/interfaces';
import { catchError } from 'rxjs/operators';
import { ThemeToggleService } from '../services/theme-toggle.service';
import url from '../helpers/url';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss']
})
export class SocialsComponent implements OnInit {
  socials: ISocial[];

  constructor(
    private service: SocialService,
    public themeToggleService: ThemeToggleService,
    private iconReg: SvgIconRegistryService
  ) {
    this.initSocials();
  }

  ngOnInit(): void {}

  toggleViewOpen() {
    // const divs = document.querySelectorAll('#drawer');
    // divs.forEach(element => {
    //   const div = element as HTMLAnchorElement;
    //   div.classList.toggle('isOpen');
    // });
  }

  initSocials(): Subscription {
    return this.service.fetchSocials().subscribe(
      (response: any) => {
        this.socials = response.map(res => res.fields);
        this.socials.forEach((social: ISocial) => {
          social.icon = `${url}/api/media/${social.icon}`;
        });
      },
      error => {
        catchError(error);
      }
    );
  }
}
