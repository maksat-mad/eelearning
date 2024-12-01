import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, throwError } from 'rxjs';
import { UserProgress } from '../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  createStudentSuccess = new BehaviorSubject<boolean>(false);
  createStudentError = new BehaviorSubject<boolean>(false);
  userProgresses = new BehaviorSubject<UserProgress[]>([]);

  constructor(private http: HttpClient) {}

  getUserProgresses() {
    this.http.get('/api/student/scores')
      .subscribe((data: any) => {
        const sortedArray = data.userprogresses.sort((a: UserProgress, b: UserProgress) => b.quiz_scores - a.quiz_scores);
        this.userProgresses.next(sortedArray);
        return data;
      });
  }

  createStudent(username: string, password: string) {
    const student = {
      username,
      password,
    };

    this.http.post('/api/student', student)
      .pipe(
        catchError(error => {
          this.createStudentError.next(true);
          return throwError(() => new Error(error));
        })
      )
      .subscribe(() => {
        this.createStudentError.next(false);
        this.createStudentSuccess.next(true);
      });
  }
}
