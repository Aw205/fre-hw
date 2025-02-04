import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register-plan',
    templateUrl: './register-plan.component.html',
    styleUrl: './register-plan.component.css',
    standalone: false
})
export class RegisterPlanComponent {


  selectedPlan: string = "Basic";
  planForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder){}

  ngOnInit(){
    
    this.planForm = this.fb.group({});
  }

  onSelect(val:string){
    this.selectedPlan = val;
    this.authService.registrationData.plan = val;
  }

  onSubmit() {
    
    if (this.planForm.valid) {

      this.authService.updateRole("ADMIN");
      this.router.navigate(['/movielist']);
    }
  }

}
