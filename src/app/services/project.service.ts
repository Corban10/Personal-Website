import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { debounceTime, retry } from 'rxjs/operators';
import url from '../helpers/url';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  fetchProjects = (): Observable<Object> => {
    return this.http
      .get(`${url}/api/projects_all/`)
      .pipe(retry(1), debounceTime(500));
  };
  fetchProject = (id: number): Observable<Object> => {
    return this.http
      .get(`${url}/api/projects_one/${id}`)
      .pipe(retry(1), debounceTime(500));
  };
}
