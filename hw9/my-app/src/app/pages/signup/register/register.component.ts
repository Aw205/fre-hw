import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { EmailValidator } from '../../../services/validators/email.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  standalone: false
})
export class RegisterComponent {

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService,private ev: EmailValidator) { }

  ngOnInit() {

    this.registerForm = this.fb.group({
      email: ["", [Validators.required, Validators.email],[this.ev.hasEmail()]],
      password: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(10)]]
    });
  }

  onSubmit() {
    
    if (this.registerForm.valid) {

      this.authService.registrationData.email = this.registerForm.get('email')?.value;
      this.authService.registrationData.password = this.registerForm.get('password')?.value;

      this.router.navigate(['/signup/register-tmdb']);
    }
  }
}
