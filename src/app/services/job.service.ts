import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  constructor(private http: HttpClient) {}
  fetchJobs = (): Observable<Object> => {
    return this.http
      .get('http://localhost:8000/api/jobs_all/')
      .pipe(retry(1), debounceTime(500));
  };
  fetchJob = (id: number): Observable<Object> => {
    return this.http
      .get(`http://localhost:8000/api/jobs_one/${id}`)
      .pipe(retry(1), debounceTime(500));
  };
}
