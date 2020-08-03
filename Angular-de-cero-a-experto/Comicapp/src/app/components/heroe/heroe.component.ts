import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../models/heroe.model';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  public heroe: Heroe;

  constructor(
    private activateRoute: ActivatedRoute,
    private heroeService: HeroesService
  ) {
    this.activateRoute.params.subscribe(params => {
      // console.log(params['id']);
      this.heroe = this.heroeService.getHeroeById(params['id']);
      console.log(this.heroe);
    });
  }

  ngOnInit() {
  }

}
