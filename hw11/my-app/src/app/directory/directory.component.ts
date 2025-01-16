import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directory',
  standalone: false,
  
  templateUrl: './directory.component.html',
  styleUrl: './directory.component.css'
})
export class DirectoryComponent {

  userData: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get("https://reqres.in/api/users").subscribe(val => {
      this.userData = val;
    });
  }

}
