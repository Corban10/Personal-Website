import { Injectable } from '@angular/core';
import { IProject } from '../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { debounceTime, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  fetchProjects = (): Observable<Object> => {
    return this.http
      .get('http://localhost:8000/api/projects_all/')
      .pipe(retry(1), debounceTime(500));
  };
  fetchProject = (id: number): Observable<Object> => {
    return this.http
      .get(`http://localhost:8000/api/projects_one/${id}`)
      .pipe(retry(1), debounceTime(500));
  };
}
