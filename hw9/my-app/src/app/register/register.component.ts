import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.registerForm = this.fb.group({
      email: [],
      password: []
    });
  }
}
