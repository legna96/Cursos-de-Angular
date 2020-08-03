import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public nuevasCanciones: any[] = [];
  public loading:boolean;
  public status:string;
  public mensajeError: any;

  constructor(private spotifyService: SpotifyService) {

    this.loading = true;

    this.spotifyService.getNewReleases()
      .subscribe(
        data => {
          this.nuevasCanciones = data;
          this.loading = false;
        },
        ResError => {
          this.status = 'error-token';
          this.loading = false;
          this.mensajeError = ResError.error.error.message;
          console.log('error en data newRealeases', <any> ResError);
        }
      );
  }

  ngOnInit() {
  }

}
