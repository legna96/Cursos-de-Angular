import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Heroe } from '../../models/heroe.model';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  public heroe: Heroe = {
    nombre: '',
    bio: '',
    casa: 'Marvel'
  };

  public id: string;
  public status: string;

  constructor(
    private heroesService: HeroesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

    activatedRoute.params.subscribe(params => {
      this.id = params['id'];

      if (this.id !== 'nuevo') {
        this.heroesService.getHeroe(this.id).subscribe(heroe => {
          this.heroe = heroe;
          console.log(heroe);
        })
      }
    });

  }

  ngOnInit() {
  }

  guardar() {

    if (this.id == 'nuevo') {
      // Insertando
      this.heroesService.nuevoHeroe(this.heroe).subscribe(
        data => {
          this.router.navigate(['heroe', data.name]);
        });
      this.status = 'success';
    }
    else {
      // Actualizando
      this.heroesService.actualizarHeroe(this.heroe, this.id).subscribe( 
        res => this.status = 'success');
    }
  }

  agregarNuevo(forma : NgForm){

    this.router.navigate(['/heroe', 'nuevo']);
    forma.reset({
      casa: 'Marvel'
    })

  }

}
