import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    standalone: false
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(){

    this.loginForm = this.fb.group({
      email: ["",[Validators.required,Validators.email]],
      password: ["",Validators.required,Validators.minLength(5)]
    });
  }

}
