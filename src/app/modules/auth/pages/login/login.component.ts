import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  standalone: true,
  imports: [ ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router ,private cookie: CookieService) {
    this.loginForm = this.fb.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      
      const role = email === 'operario@example.com' ? 'operario' : 'supervisor';
      
      this.cookie.set('token', 'sample-token');
      this.cookie.set('role', role);
  
      if (role === 'operario') {
        this.router.navigate(['/products']);
      } else if (role === 'supervisor') {
        this.router.navigate(['/reports']);
      }
    } else {
      alert('Error 🔴🔴🔴🔴');
    }
  }
  
}
