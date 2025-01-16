import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
    standalone: false
})
export class RegisterComponent {

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.registerForm = this.fb.group({
      email: ["",[Validators.required,Validators.email]],
      password: ["",Validators.required,Validators.minLength(5)]
    });
  }
}
