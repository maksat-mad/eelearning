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
