import { Component, OnInit } from '@angular/core';
import { SvgIconRegistryService } from 'angular-svg-icon';
import { SocialService } from '../services/social.service';
import { Subscription } from 'rxjs';
import { ISocial } from '../interfaces/interfaces';
import { catchError } from 'rxjs/operators';
import { ThemeToggleService } from '../services/theme-toggle.service';

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
  initSocials = (): Subscription =>
    this.service.fetchSocials().subscribe(
      (response: any) => {
        this.socials = response.map(res => res.fields);
        this.socials.forEach((social: ISocial) => {
          social.icon = `http://localhost:8000/api/media/${social.icon}`;
        });
      },
      error => {
        console.error(error);
        catchError(error);
      }
    );
}
