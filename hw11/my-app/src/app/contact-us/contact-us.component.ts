import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  standalone: false,
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

  name!:string;
  message!:string;
  isSubmitted: boolean = false;

  onSubmit(){
    this.isSubmitted = true;
  }

}
