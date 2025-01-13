import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register-tmdb',
  templateUrl: './register-tmdb.component.html',
  styleUrl: './register-tmdb.component.scss'
})
export class RegisterTmdbComponent {

  tmdbForm!: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(){

    this.tmdbForm = this.fb.group({
      username: [],
      apiKey: []
    });
  }

}
