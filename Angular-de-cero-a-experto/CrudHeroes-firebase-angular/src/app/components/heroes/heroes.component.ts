import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  public heroes: {};
  public loading: boolean = true;

  constructor(
    private router: Router,
    private heroesService: HeroesService
  ) { 
    this.getHeroes();
  }

  ngOnInit() {
  }

  getHeroes(){
    this.loading = true;
    this.heroesService.getHeroes().subscribe(
      data =>{
        //objeto de objetos
        this.heroes = data;
        this.loading = false;
      },
      error =>{
        this.loading = false;
        alert('Ha Ocurrido un Error ' + error.message);
      }
    )
  }

  borrarHeroe(key$){
    this.heroesService.borrarHeroe(key$).subscribe(
      res => delete this.heroes[key$]
    );
  }

}
