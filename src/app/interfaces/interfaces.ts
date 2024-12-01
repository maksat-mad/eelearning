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
