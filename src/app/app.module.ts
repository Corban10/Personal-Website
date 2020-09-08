import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
// import { BlogComponent } from './blog/blog.component';
import { JobsComponent } from './jobs/jobs.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SkillsComponent } from './skills/skills.component';

import { ProjectService } from './services/project.service';
import { BlogService } from './services/blog.service';
import { JobService } from './services/job.service';
import { ThemeToggleService } from './services/theme-toggle.service';
import { SkillService } from './services/skill.service';

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
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [
    ProjectService,
    BlogService,
    JobService,
    SkillService,
    ThemeToggleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
