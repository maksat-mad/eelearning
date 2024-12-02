import { Component, inject, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { CourseService } from '../../../services/course.service';
import { AuthService } from '../../../services/auth.service';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { QuizService } from '../../../services/quiz.service';

@Component({
  selector: 'app-quiz-question',
  imports: [MatRadioModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink],
  templateUrl: './quiz-question.component.html',
  styleUrl: './quiz-question.component.scss',
  standalone: true,
})
export class QuizQuestionComponent implements OnInit {
  courseService = inject(CourseService);
  authService = inject(AuthService);
  router = inject(Router);
  quizService = inject(QuizService);

  question_text = '';
  option_a = '';
  option_b = '';
  option_c = '';
  option_d = '';
  correct_option = '';

  error = false;
  errorText = '';
  show = true;

  ngOnInit() {
    this.quizService.createQuizQuestionSuccess.next(false);
    if (!this.courseService.courseDetails.getValue()) {
      this.router.navigateByUrl('/pages/courses');
    }
  }

  selectOption(option: string) {
    this.error = false;
    this.correct_option = option;
  }

  createQuizQuestion() {
    this.error = false;

    if (this.correct_option === '') {
      this.error = true;
      this.errorText = 'Select an option';
      return;
    }

    if (this.question_text.trim() === '') {
      this.error = true;
      this.errorText = 'Write question text';
      return;
    }

    if (this.option_a.trim() === '') {
      this.error = true;
      this.errorText = 'Options A is empty';
      return;
    }

    if (this.option_b.trim() === '') {
      this.error = true;
      this.errorText = 'Options B is empty';
      return;
    }

    if (this.option_c.trim() === '') {
      this.error = true;
      this.errorText = 'Options C is empty';
      return;
    }

    if (this.option_d.trim() === '') {
      this.error = true;
      this.errorText = 'Options D is empty';
      return;
    }

    const quiz_question = {
      question_text: this.question_text.trim(),
      option_a: this.option_a.trim(),
      option_b: this.option_b.trim(),
      option_c: this.option_c.trim(),
      option_d: this.option_d.trim(),
      correct_option: this.correct_option,
      quiz: this.courseService.courseDetails.getValue()?.quiz[0].quiz_id,
    };

    this.quizService.createQuizQuestion(quiz_question);

    this.question_text = '';
    this.option_a = '';
    this.option_b = '';
    this.option_c = '';
    this.option_d = '';
    this.correct_option = '';
    this.show = false;
    setTimeout(() => {
      this.show = true; // to reload the view
    }, 100);
  }
}
