import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';
import url from '../helpers/url';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http: HttpClient) {}
  // categories
  fetchCategories = (): Observable<Object> => {
    return this.http
      .get(`${url}/api/categories_all/`)
      .pipe(retry(1), debounceTime(500));
  };
  fetchCategory = (id: number): Observable<Object> => {
    return this.http
      .get(`${url}/api/categories_one/${id}`)
      .pipe(retry(1), debounceTime(500));
  };
  // posts
  fetchBlogPosts = (): Observable<Object> => {
    return this.http
      .get(`${url}/api/blog_posts_all/`)
      .pipe(retry(1), debounceTime(500));
  };
  fetchBlogPost = (id: number): Observable<Object> => {
    return this.http
      .get(`${url}/api/blog_posts_one/${id}`)
      .pipe(retry(1), debounceTime(500));
  };
}
