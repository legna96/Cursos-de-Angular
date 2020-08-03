import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { NavParams } from 'ionic-angular';
import { Lista, ListaItem } from '../../models';

@Component({
    selector: 'page-agregar',
    templateUrl: 'agregar.component.html'
})

export class AgregarPage implements OnInit {

    public lista: Lista;
    public nombreItem: string = '';

    constructor(
        private deseosService: DeseosService,
        private navParams: NavParams
    ) {

        // Leer lista
        if (this.navParams.get('lista')) {
            this.lista = this.navParams.get('lista');
        }
        // Crear Lista
        else {
            const titulo = this.navParams.get('titulo');
            this.lista = new Lista(titulo);
            deseosService.agregarLista(this.lista);
        }

    }

    ngOnInit() { }

    agregarItem() {

        if (this.nombreItem.length === 0) {
            return;
        }

        const nuevoItem = new ListaItem(this.nombreItem);
        this.lista.items.push(nuevoItem);

        this.lista.terminada = false;
        this.lista.terminadaEn = null;
        
        this.deseosService.guardarStorage();
        this.nombreItem = '';
    }

    actualizarTarea(item: ListaItem) {

        item.completado = !item.completado;

        const pendientes = this.lista.items.filter(itemData => !itemData.completado).length;

        if (pendientes === 0) {
            this.lista.terminada = true;
            this.lista.terminadaEn = new Date();
        }
        else {
            this.lista.terminada = false;
            this.lista.terminadaEn = null;
        }

        this.deseosService.guardarStorage();
    }

    borrar(index: number) {
        this.lista.items.splice(index, 1);
        this.deseosService.guardarStorage();
    }
}