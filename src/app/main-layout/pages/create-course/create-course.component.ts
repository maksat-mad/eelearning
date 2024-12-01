import { Component, inject, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-create-course',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './create-course.component.html',
  styleUrl: './create-course.component.scss',
  standalone: true,
})
export class CreateCourseComponent implements OnInit {
  title = '';
  description = '';

  courseService = inject(CourseService);

  ngOnInit() {
    this.courseService.createCourseSuccess.next(false);
    this.courseService.createCourseError.next(false);
  }

  createCourse() {
    this.courseService.createCourse(this.title, this.description);
  }
}
