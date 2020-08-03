import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from '../models/heroe.model';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  public heroesUrl:string = 'https://heroes-crud-be887.firebaseio.com/heroes';

  constructor(
    private http: HttpClient
  ) { 
    
  }

  nuevoHeroe( heroe : Heroe ): Observable <any>{

    const URL = this.heroesUrl + '.json';

    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(URL, body, { headers });
  }

  actualizarHeroe( heroe : Heroe, key$ : string ): Observable <any>{

    const URL = this.heroesUrl + `/${ key$ }.json`;
    
    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.put(URL, body, { headers });
  }

  getHeroe(key$ : string ): Observable <any>{

    const URL = this.heroesUrl + `/${ key$ }.json`;
    
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(URL, { headers });
  }

  getHeroes(): Observable <any>{
    
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(this.heroesUrl + '.json', { headers });
  }

  borrarHeroe(key$ : string ): Observable <any>{

    const URL = this.heroesUrl + `/${ key$ }.json`;
    
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.delete( URL, { headers });
  }
}
