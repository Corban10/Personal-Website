import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  constructor(private http: HttpClient) {}
  fetchSkills = (): Observable<Object> => {
    return this.http
      .get('http://localhost:8000/api/skills_all/')
      .pipe(retry(1), debounceTime(500));
  };
}
