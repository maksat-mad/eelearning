export interface User {
  user_id: number,
  username: string,
  is_student: boolean,
  is_instructor: boolean,
}

export interface Course {
  course_id: number,
  title: string,
  description: string,
}

export interface UserProgress {
  progress_id: number,
  quiz_scores: number,
  username: string,
  user: number,
}

export interface Quiz {
  quiz_id: number,
  title: string,
  course: number,
}

export interface QuizQuestion {
  question_id?: number,
  question_text: string,
  option_a: string,
  option_b: string,
  option_c: string,
  option_d: string,
  correct_option: 'A' | 'B' | 'C' | 'D',
  quiz: number,
}

export interface CourseDetails {
  course: Course,
  quiz: Quiz[],
  quizQuestions: QuizQuestion[],
}
