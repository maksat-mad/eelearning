import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-courses',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
  standalone: true,
})
export class CoursesComponent {

}
