import { Component, inject, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-create-student',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.scss',
  standalone: true,
})
export class CreateStudentComponent implements OnInit {
  username = '';
  password = '';

  studentService = inject(StudentService);

  ngOnInit() {
    this.studentService.createStudentSuccess.next(false);
    this.studentService.createStudentError.next(false);
  }

  createStudent() {
    this.studentService.createStudent(this.username, this.password);
  }
}
