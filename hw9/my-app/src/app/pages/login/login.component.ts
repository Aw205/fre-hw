
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: false
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, public authService: AuthService,private router: Router) { }

  ngOnInit() {

    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(10)]]
    });
  }

  onSubmit() {

    if (this.loginForm.valid) {
      let email: string = this.loginForm.get('email')!.value;
      let password = this.loginForm.get('password')!.value;
      this.authService.logIn(email, password);
    }
  }

}
