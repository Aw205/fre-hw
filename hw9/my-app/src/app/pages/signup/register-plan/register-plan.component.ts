import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'app-register-plan',
    templateUrl: './register-plan.component.html',
    styleUrl: './register-plan.component.css',
    standalone: false
})
export class RegisterPlanComponent {


  selectedPlan: string = "Basic";

  constructor(private authService: AuthService){

  }

  onSelect(val:string){
    this.selectedPlan = val;
    this.authService.registrationData.plan = val;
  }

}
