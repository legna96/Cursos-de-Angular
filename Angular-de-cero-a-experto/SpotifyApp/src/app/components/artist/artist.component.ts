import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {

  public artista: any;
  public canciones: any[] = [];
  public loading: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {
    this.activatedRoute.params.subscribe(
      params => {
        this.getArtista(params['id']);
        this.getTopTracks(params['id']);
      }
    )
  }

  ngOnInit() {
  }

  getArtista(id: string) {
    this.loading = true;
    this.spotifyService.getArtista(id).subscribe(
      resp => {
        this.artista = resp;
        this.loading = false;
      });
  }

  getTopTracks(id: string) {
    this.spotifyService.getTopTraks(id).subscribe(
      topTracks => {
        this.canciones = topTracks;
        console.log(this.canciones);
      })
  }

}
