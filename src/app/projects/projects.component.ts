import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { IProject } from '../interfaces/interfaces';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: IProject[];

  constructor(private service: ProjectService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects = (): void => {
    this.service.fetchProjects().subscribe(
      (response: any) => {
        this.projects = response.map(res => res.fields);
      },
      error => {
        console.error(error);
        catchError(error);
      }
    );
  };
}
