
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class iTunesAPI {

    constructor(private http: HttpClient) { }

    getAlbumInfo(searchVal: string) : Observable<any>{
        return this.http.get(`https://itunes.apple.com/search?term=${searchVal}&media=music&entity=album&attribute=artistTerm&limit=200`);
    }
}

