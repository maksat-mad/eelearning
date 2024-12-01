import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-progress',
  imports: [MatCardModule],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss',
  standalone: true,
})
export class ProgressComponent {
  studentService = inject(StudentService);

  ngOnInit() {
    this.studentService.getUserProgresses();
  }
}
