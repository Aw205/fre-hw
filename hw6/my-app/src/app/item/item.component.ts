import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
})
export class ItemComponent {

  @Input() data!: {name: string, description:string, color:string};
  @Input() selected: boolean = false;

  @Output() selectEvent = new EventEmitter<{ name: string, description: string }>()

  constructor() {

  }

  onClick() {

    //this.selected = !this.selected;
    this.selectEvent.emit({ name: this.data.name, description: this.data.description });
  }

}
