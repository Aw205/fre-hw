import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthDto } from './authDto';
import { JwtHelperService } from "@auth0/angular-jwt";
import { catchError, of, switchMap, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';

type regiData = { username: string, email: string, password: string, tmdbKey: string, plan: string };

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  username: string | null = null;
  loginExists: boolean = true;
  registrationData: regiData = { username: "", email: "", password: "", tmdbKey: "", plan: "" } as regiData;
  jwt = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) { }


  register(username: string, email: string, password: string) {

    return this.http.post('http://localhost:5566/api/v1/auth/signup', { username: username, email: email, password: password }).subscribe((val) => {
      console.log(val);
    });
  }

  logIn(email: string, password: string) {

    this.http.post<AuthDto>('http://localhost:5566/api/v1/auth/signin', { email: email, password: password }).pipe(

      catchError((error) => {
        this.loginExists = false;
        return throwError(() => new Error());
      })
    ).subscribe((val) => {

      this.loginExists = true;

      localStorage.setItem("myToken", val.accessToken);
      this.registrationData.plan = val.role;
      let payload = this.jwt.decodeToken(val.accessToken);
      this.username = payload.username;
      this.router.navigate(['/movielist']);
    });
  }

  logOut() {

    this.username = null;
    this.loginExists = true;
    localStorage.clear();

  }

  updateRole(role: string) {

    const token = localStorage.getItem('myToken');
    let header = new HttpHeaders().set("Authorization", token!)
    return this.http.patch<AuthDto>('http://localhost:5566/api/v1/auth/userupdate', {role: role},{headers: header}).pipe(
      catchError((error) => {
        return throwError(() => new Error('Error in updateRole'));
      }),
      tap(({ accessToken, role }: AuthDto) => {
        localStorage.setItem("myToken",accessToken);
        this.registrationData.plan = role;

      })
    ).subscribe();
  }



}
