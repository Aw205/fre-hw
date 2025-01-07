import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  itemlist = [
    'Changjinhu (2021)',
    'Dune (2021)',
    'Shang-Chi and the Legend of the Ten Rings (2021)',
    'Free Guy (2021)',
    'The Many Saints of Newark (2021)',
    'Finch (2021)',
    'Candyman (2021)',
    'No Time to Die (2021)',
    'Halloween Kills (2021)',
  ].map(e => {
    return { movie: e, checked: false };
  });

  selectedAll: boolean = false;

  isAllChecked() {
    this.selectedAll = this.itemlist.every(e => e.checked == true);
  }

  toggleSelectAll() {
    this.itemlist.forEach(item => item.checked = this.selectedAll);
  }

  clearAll(){
    this.selectedAll = false;
    this.toggleSelectAll();

  }

}
