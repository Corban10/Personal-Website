import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { debounceTime, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SocialService {
  constructor(private http: HttpClient) {}
  fetchSocials = (): Observable<Object> => {
    return this.http
      .get('http://localhost:8000/api/socials_all/')
      .pipe(retry(1), debounceTime(500));
  };
}
