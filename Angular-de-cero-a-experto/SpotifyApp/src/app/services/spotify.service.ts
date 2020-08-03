import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('service listo');
  }

  getQuery(query: string) {

    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDqH3AkusfHo1JgVNxAG5SusCttUDw3InCUQahzR_Pkc9iTuKTwjKzp-tHpdWgytuA4FD2OljBLwCrgivU'
    });

    return this.http.get(url, { headers });

  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
      .pipe(
        map(
          data => data['albums'].items,
          err => console.log(<any>err)
        )
      );

  }

  getArtistas(termino: string) {
    return this.getQuery(`search?query=${termino}&type=artist&market=MX&offset=0&limit=15`)
      .pipe(
        map(
          data => data['artists'].items,
          err => console.log(<any>err)
        )
      );
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTraks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=MX`)
      .pipe(
        map(
          data => data['tracks'],
          err => console.log(<any>err)
        )
      );
  }
}
