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
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    // BlogComponent,
    JobsComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [ProjectService, BlogService, JobService],
  bootstrap: [AppComponent]
})
export class AppModule {}
