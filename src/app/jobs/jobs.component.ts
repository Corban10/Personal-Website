import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';
import { IJob } from '../interfaces/interfaces';
import { catchError } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  jobs: IJob[];

  constructor(private service: JobService) {}

  ngOnInit(): void {
    this.initJobs();
  }

  initJobs = (): Subscription =>
    this.service.fetchJobs().subscribe(
      (response: any) => {
        this.jobs = response.map(res => res.fields);
      },
      error => {
        console.error(error);
        catchError(error);
      },
      () => console.log(this.jobs)
    );
}
