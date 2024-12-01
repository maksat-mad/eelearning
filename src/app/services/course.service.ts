import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, throwError } from 'rxjs';
import { Course } from '../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses = new BehaviorSubject<Course[]>([]);
  createCourseSuccess = new BehaviorSubject<boolean>(false);
  createCourseError = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  getCourses() {
    this.http.get<Course[]>('/api/course')
      .subscribe((data: any) => {
        this.courses.next(data);
        return data;
      });
  }

  createCourse(title: string, description: string) {
    const course = {
      title,
      description,
    };

    this.http.post('/api/course', course)
      .pipe(
        catchError(error => {
          this.createCourseError.next(true);
          return throwError(() => new Error(error));
        })
      )
      .subscribe(() => {
        this.createCourseError.next(false);
        this.createCourseSuccess.next(true);
      });
  }
}
