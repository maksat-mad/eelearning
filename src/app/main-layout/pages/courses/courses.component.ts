import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CourseService } from '../../../services/course.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-courses',
  imports: [MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
  standalone: true,
})
export class CoursesComponent implements OnInit {
  CourseService = inject(CourseService);
  router = inject(Router);

  ngOnInit() {
    this.CourseService.getCourses();
  }
}
