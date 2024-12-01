import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Course } from '../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  courses = new BehaviorSubject<Course[]>([]);
  constructor(private http: HttpClient) {}

  getCourses() {
    this.http.get<Course[]>('/api/course')
      .subscribe((data: any) => {
        this.courses.next(data);
        return data;
      });
  }
}
