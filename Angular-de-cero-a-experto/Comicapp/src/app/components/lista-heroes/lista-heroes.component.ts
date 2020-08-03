import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../models/heroe.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-heroes',
  templateUrl: './lista-heroes.component.html'
})
export class ListaHeroesComponent implements OnInit {

  public heroes: Heroe[] = [];
  public termino: string;
  public status: string;

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.buscarHeroes();
  }

  buscarHeroes() {

    this.activatedRoute.params.subscribe(
      params => {
        this.termino = params['termino'];
        this.heroes = this.heroesService.buscarHeroe(this.termino);

        if (this.heroes.length > 0) {

          if (this.termino == '')
            this.status = 'info';
          else 
            this.status = 'success';
        }
        else {
          this.status = 'error';
        }
      },
      err => {
        console.log('ha ocurrido un error al recibir el termino de busqueda heroes', <any>err);
      }
    );
  }

  verHeroe(index: number) {
    console.log('heroes comp');
    this.router.navigate(['/heroe', index]);
  }

}
