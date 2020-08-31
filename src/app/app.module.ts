import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { JobsComponent } from './jobs/jobs.component';

import { ProjectService } from './services/project.service';
import { BlogService } from './services/blog.service';
import { JobService } from './services/job.service';

@NgModule({
  declarations: [AppComponent, ProjectsComponent, BlogComponent, JobsComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [ProjectService, BlogService, JobService],
  bootstrap: [AppComponent]
})
export class AppModule {}
