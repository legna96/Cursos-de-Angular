import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from '../../models/heroe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() public heroe: Heroe;

  @Input() public id: number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(
    private router: Router
  ) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe(){
    this.heroeSeleccionado.emit( this.id );
  }

}
