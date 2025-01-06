import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() titleColor!: string;
  @Input() data!: any;
  @Output() changeColor = new EventEmitter<string>();

}
