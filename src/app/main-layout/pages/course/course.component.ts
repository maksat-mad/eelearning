import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EMPTY, switchMap, take } from 'rxjs';
import { CourseService } from '../../../services/course.service';
import { AuthService } from '../../../services/auth.service';
import { NgClass } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-course',
  imports: [NgClass, MatButtonModule, RouterLink],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss',
  standalone: true,
})
export class CourseComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  courseService = inject(CourseService);
  authService = inject(AuthService);

  ngOnInit() {
    this.activatedRoute.paramMap.pipe(
      switchMap(paramMap => {
        this.courseService.getCourseDetails(+paramMap.get('id')!);
        return EMPTY;
      }),
      take(1),
    ).subscribe();
  }
}
