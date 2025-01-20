import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthDto } from './authDto';
import { JwtHelperService } from "@auth0/angular-jwt";

type regiData = { username: string, email: string, password: string, tmdbKey: string, plan: string };

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  username: string | null = null;
  emailExists: boolean = true;
  registrationData: regiData = {} as regiData;
  jwt = new JwtHelperService();

  constructor(private http: HttpClient) { }


  register(username: string, email: string, password: string) {

    return this.http.post('http://localhost:5566/api/v1/auth/signup', { username: username, email: email, password: password }).subscribe((val) => {
      console.log(val);
    });
  }


  logIn(email: string, password: string) {

    this.http.post<boolean>('http://localhost:5566/api/v1/auth/check-email', { email: email }).subscribe((emailExists) => {
      this.emailExists = emailExists;
      if (emailExists) {
        this.http.post<AuthDto>('http://localhost:5566/api/v1/auth/signin', { email: email, password: password }).subscribe((val) => {

          localStorage.setItem("myToken", val.accessToken);
          localStorage.setItem("myRole", val.role);

          let payload = this.jwt.decodeToken(val.accessToken);
          this.username = payload.username;

        });
      }
    });
  }

  logOut(){

    this.username = null;
    this.emailExists = true;
    localStorage.clear();

  }

}
