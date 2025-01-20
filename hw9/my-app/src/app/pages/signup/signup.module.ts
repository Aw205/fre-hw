import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup.component';
import { RegisterComponent } from './register/register.component';
import { RegisterTmdbComponent } from './register-tmdb/register-tmdb.component';
import { RegisterPlanComponent } from './register-plan/register-plan.component';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';


const routes: Routes = [{
    path: '', component: SignupComponent, children: [
        { path: 'register', component: RegisterComponent },
        { path: 'register-plan', component: RegisterPlanComponent },
        { path: 'register-tmdb', component: RegisterTmdbComponent },
        { path: '', redirectTo: 'register', pathMatch: 'full' },
    ]
}];

@NgModule({
    declarations: [RegisterComponent,RegisterPlanComponent,RegisterTmdbComponent,SignupComponent],
    imports: [
        SharedModule,
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class SignupModule { }