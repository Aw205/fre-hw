import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { debounceTime, map, switchMap, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class EmailValidator {
    constructor(private readonly http: HttpClient) { }

    hasEmail(): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
            const email = control.value;
            return this.http
                .post('http://localhost:5566/api/v1/auth/check-email', { email })
                .pipe(
                    debounceTime(500),
                    switchMap(() => {
                        return this.http.post('http://localhost:5566/api/v1/auth/check-email', { email })
                    }),
                    map((result: any) => {
                        return result ? { hasEmail: true } : null;
                    }),
                    take(1)
                );
        };
    }
}