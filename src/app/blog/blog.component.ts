import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { ICategory, IBlogPost } from '../interfaces/interfaces';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  categories: ICategory[];
  blogPosts: IBlogPost[];

  constructor(private service: BlogService) {}

  ngOnInit(): void {
    this.getCategories();
    this.getBlogPosts();
  }

  getCategories = (): void => {
    this.service.fetchCategories().subscribe(
      (response: any) => {
        this.categories = response.map(res => res.fields);
      },
      error => {
        console.error(error);
        catchError(error);
      }
    );
  };

  getBlogPosts = (): void => {
    this.service.fetchBlogPosts().subscribe(
      (response: any) => {
        this.blogPosts = response.map(res => res.fields);
      },
      error => {
        console.error(error);
        catchError(error);
      }
    );
  };
}
