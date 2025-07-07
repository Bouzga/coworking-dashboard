import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private router : Router
  ) {}

  onLogin() {

    if(this.email=== 'admin@demo.com' && this.password === 'admin123') {
      console.log('Login successful!');
      this.router.navigate(['/dashboard']);
    }
  }

  onGuestVisit() {
    console.log('Guest visit initiated!');
    this.router.navigate(['/guest']);
  }
}
