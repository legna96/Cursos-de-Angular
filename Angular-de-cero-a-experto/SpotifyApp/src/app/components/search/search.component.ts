import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  public artistas: any[] = [];
  public termino: string = '';
  public loading: boolean;
  public status: string;
  public mensajeError:string;

  constructor(private spotifyService: SpotifyService) {
  }

  ngOnInit() {
  }

  buscar(termino: string) {

    if (termino == '') {
      this.loading = false;
    }
    else {
      this.loading = true;
      this.spotifyService.getArtistas(termino)
        .subscribe(
          data => {
            this.artistas = data;
            this.loading = false;
            this.status = 'success';

            if (this.artistas.length == 0) {
              this.status = 'error';
            }

          },
          ResError => {
            this.loading = false;
            this.status = 'error-token';
            this.mensajeError = ResError.error.error.message;
            console.log(<any>ResError);
          } 
        );
    }

  }

}
