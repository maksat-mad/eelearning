import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QuizQuestion } from '../interfaces/interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  createQuizQuestionSuccess = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  createQuizQuestion(quizQuestion: any) {
    this.http.post('/api/quiz-question', quizQuestion)
      .subscribe(() => {
        this.createQuizQuestionSuccess.next(true);
      });
  }
}
