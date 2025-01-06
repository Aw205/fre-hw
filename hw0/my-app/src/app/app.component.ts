import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  cardData: any[] = [

    {
      title: "Some Randoom Title",
      content: "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ",
      color: "blue"
    },
    {
      title: "Some Randoom Title",
      content: "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ",
      color: "black"
    },
    {
      title: "Some Randoom Title",
      content: "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ",
      color: "red"
    },
    {
      title: "Some Randoom Title",
      content: "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ",
      color: "green"
    }
  ];
  myColor: string = "black";
}
