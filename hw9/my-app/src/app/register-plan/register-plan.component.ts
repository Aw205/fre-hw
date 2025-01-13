import { Component } from '@angular/core';

@Component({
  selector: 'app-register-plan',
  templateUrl: './register-plan.component.html',
  styleUrl: './register-plan.component.scss'
})
export class RegisterPlanComponent {


  selectedPlan: string = "Basic";

  constructor(){

  }

  onSelect(val:string){
    this.selectedPlan = val;
  }

}
