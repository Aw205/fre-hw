import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: false,
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

  nname:string = "";
  mmessage:string = "";
  isSubmitted: boolean = false;

  onSubmit(form:NgForm){
    if(!form.invalid){
      this.isSubmitted = true;
    }
  }

}
