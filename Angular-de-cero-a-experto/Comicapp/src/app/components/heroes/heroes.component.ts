import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../models/heroe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  public heroes: Heroe[] = [];

  constructor(
    private heroesService: HeroesService,
    private router: Router
  ) {
    // console.log('constructor');
  }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
    console.log('ngOnInit', 'Heroes', this.heroes);
  }

  verHeroe(id: number) {
    this.router.navigate(['/heroe', id]);
  }

}
