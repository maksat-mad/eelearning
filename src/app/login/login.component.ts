import { Component, inject, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  authService = inject(AuthService);

  ngOnInit() {
    this.authService.authError.next(false);
  }

  login() {
    this.authService.login(this.username, this.password);
  }
}
