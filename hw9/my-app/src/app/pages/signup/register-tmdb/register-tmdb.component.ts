import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'app-register-tmdb',
    templateUrl: './register-tmdb.component.html',
    styleUrl: './register-tmdb.component.css',
    standalone: false
})
export class RegisterTmdbComponent {

  tmdbForm!: FormGroup;

  constructor(private fb: FormBuilder,private router: Router, private authService:AuthService){}

  ngOnInit(){

    this.tmdbForm = this.fb.group({
      username: ["",Validators.required],
      apiKey: ["",Validators.required]
    });
  }

  onSubmit() {
    
    if (this.tmdbForm.valid) {

      this.authService.registrationData.tmdbKey = this.tmdbForm.get('apiKey')?.value;
      this.authService.registrationData.username = this.tmdbForm.get('username')?.value;
      this.router.navigate(['/signup/register-plan']);
    }
  }

}
