import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ISkill } from '../interfaces/interfaces';
import { SkillService } from '../services/skill.service';
import { SvgIconRegistryService } from 'angular-svg-icon';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: ISkill[];

  constructor(
    private service: SkillService,
    private iconReg: SvgIconRegistryService
  ) {
    this.initSkills();
  }

  ngOnInit(): void {}

  initSkills = (): Subscription =>
    this.service.fetchSkills().subscribe(
      (response: any) => {
        this.skills = response.map(res => res.fields);
        this.skills.forEach((skill: ISkill) => {
          skill.icon = `http://localhost:8000/api/media/${skill.icon}`;
        });
      },
      error => {
        catchError(error);
      }
    );
}
