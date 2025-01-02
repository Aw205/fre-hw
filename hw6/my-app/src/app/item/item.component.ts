import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
})
export class ItemComponent {

  @Input() name: string = "";
  @Input() description: string = "";
  @Input() color: string = "";
  selected: boolean = false;

  @Output() selectEvent = new EventEmitter<{ name: string, description: string }>()

  constructor() {

  }

  onClick() {

    this.selected = !this.selected;
    this.selectEvent.emit({ name: this.name, description: this.description });

  }

}
