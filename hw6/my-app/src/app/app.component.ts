
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})


export class AppComponent {

  data: { name: string, description: string, color: string }[] = [
    {
      name: "James",
      description: `Welcome to the Angular Tutorial. 
      This Tutorial covers all versions of Angular Starting from Angular 2 to the latest editions of i.e. Angular 8, Angular 9 &amp; Angular 10. 
      We have created a simple and step by step tutorial for beginners to learn all the features of the Angular. 
      The tutorial also covers some of the advanced Angular Tutorials.`,
      color: "Red"
    },
    {
      name: "Will Kenny",
      description: `The Angular is a development platform for building a Single Page Application for mobile and desktop. 
      It uses Typescript &amp; HTML to build Apps. The Angular itself is written using the Typescript. 
      It now comes with every feature you need to build a complex and sophisticated web or mobile application. 
      It comes with features like component, Directives, Forms, Pipes, HTTP Services, Dependency Injection, etc`,
      color: "Green"
    },
    {
      name: "Beth Williams",
      description: `This Introduction to Angular Tutorial gives you a glimpse of Angular. 
      Angular is a UI framework for building mobile and desktop web applications. 
      It is built using Javascript. Using Angular you can build amazing client-side applications using HTML, CSS, and Typescript. 
      It is very important to know how the Angular framework works before you start using it. 
      The following tutorials introduce you to Angular and discuss Angulars architecture.`,
      color: "Blue"
    },
    {
      name: "Rev Shawn",
      description: `The Angular has gone through a lot of changes since the version Angular 2. 
    From the Angular 7 version, installing and creating a new project in angular has become very simple. 
    The only thing you need to do in install and Visual Studio code, NPM Package manager & Angular CLI. 
    Once, you install the required dependencies, creating a new project is as easy as running a simple command ng new. 
    Angular CLI takes care of Configuration &amp; initialization of various libraries.`,
      color: "Black"
    },
  ];
  selected: { name: string, description: string, color: string } = this.data[0];

  constructor() {

  }

  changeSelect(item:any){
    this.selected = item;
  }

}
