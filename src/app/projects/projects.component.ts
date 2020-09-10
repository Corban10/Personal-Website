import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { IProject, IImage } from '../interfaces/interfaces';
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
        this.projects = response.map((project: IProject) => {
          project.images.map(image => {
            image.image = `http://localhost:8000/api/media/${image.image}`;
            return image;
          });
          project.images = project.images;
          return project;
        });
      },
      error => {
        catchError(error);
      }
    );
  };

  disableUrlClick(project: IProject): void {
    if (!project.url) {
      event.preventDefault();
    }
  }
  disableGithubClick(project: IProject): void {
    if (!project.github) {
      event.preventDefault();
    }
  }
  getUrl(image: IImage) {
    return { 'background-image': image.image };
  }
}
