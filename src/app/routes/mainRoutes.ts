import { Routes } from "@angular/router";
import { MainLayoutComponent } from "../main-layout/main-layout.component";
import { instructorGuard } from "../guards/instructor.guard";

export const mainRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'courses',
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'create-course',
        pathMatch: 'full',
        loadComponent: () => import('../main-layout/pages/create-course/create-course.component').then((c) => c.CreateCourseComponent),
        title: 'Create Course',
        canMatch: [instructorGuard],
      },
      {
        path: 'create-student',
        pathMatch: 'full',
        loadComponent: () => import('../main-layout/pages/create-student/create-student.component').then((c) => c.CreateStudentComponent),
        title: 'Create Student',
        canMatch: [instructorGuard],
      },
      {
        path: 'progress',
        pathMatch: 'full',
        loadComponent: () => import('../main-layout/pages/progress/progress.component').then((c) => c.ProgressComponent),
        title: 'Student Progress',
        canMatch: [instructorGuard],
      },
      {
        path: 'quiz-question',
        pathMatch: 'full',
        loadComponent: () => import('../main-layout/pages/quiz-question/quiz-question.component').then((c) => c.QuizQuestionComponent),
        title: 'Quiz Question',
        canMatch: [instructorGuard],
      },
      {
        path: 'courses',
        pathMatch: 'full',
        loadComponent: () => import('../main-layout/pages/courses/courses.component').then((c) => c.CoursesComponent),
        title: 'Courses',
      },
      {
        path: 'courses/:id',
        pathMatch: 'full',
        loadComponent: () => import('../main-layout/pages/course/course.component').then((c) => c.CourseComponent),
        title: 'Course',
      },
    ],
  },
];
