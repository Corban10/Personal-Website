import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { debounceTime, retry } from 'rxjs/operators';
import url from '../helpers/url';

@Injectable({
  providedIn: 'root'
})
export class SocialService {
  constructor(private http: HttpClient) {}
  fetchSocials = (): Observable<Object> => {
    return this.http
      .get(`${url}/api/socials_all/`)
      .pipe(retry(1), debounceTime(500));
  };
}
