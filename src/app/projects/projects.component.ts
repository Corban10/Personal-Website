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
        this.projects = response.map(res => {
          return res.fields;
        });
        this.projects.forEach((project: IProject) => {
          project.image.image = `http://localhost:8000/api/media/${project.image.image}`;
        });
      },
      error => {
        console.error(error);
        catchError(error);
      }
    );
  };
}
