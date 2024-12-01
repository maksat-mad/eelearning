import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, switchMap, take } from 'rxjs';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-course',
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss',
  standalone: true,
})
export class CourseComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  courseService = inject(CourseService);

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
