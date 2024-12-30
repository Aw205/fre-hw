import { Component } from '@angular/core';
import { iTunesAPI } from './iTunesAPI.service';

@Component({
    selector: 'search-bar',
    standalone: false,
    templateUrl: './search-bar.component.html',
})


export class SearchBar {

    albumData: any[] = [];
    searchVal: string = "";
    searchDescription!: { numResults: number, keyword: string };

    constructor(private api: iTunesAPI) { }

    onEnter() {

        this.api.getAlbumInfo(this.searchVal).subscribe(data => {

            this.albumData = data.results;
            this.searchDescription = { numResults: data.results.length, keyword: this.searchVal };

        })
    }
}

