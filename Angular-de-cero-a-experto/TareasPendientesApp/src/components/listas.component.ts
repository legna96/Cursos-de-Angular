import { Component, OnInit, Input } from '@angular/core';
import { DeseosService } from '../services/deseos.service';
import { NavController, AlertController, ItemSliding } from 'ionic-angular';
import { AgregarPage } from '../pages/agregar/agregar.component';
import { Lista } from '../models';

@Component({
    selector: 'app-listas',
    templateUrl: 'listas.component.html'
})

export class ListasComponent implements OnInit {

    @Input() terminado: boolean;

    constructor(
        private deseosService: DeseosService,
        private navCtrl: NavController,
        private alertCtrl: AlertController
    ) { }

    ngOnInit() { }

    listaSelecccionada(lista: Lista) {
        this.navCtrl.push(AgregarPage, {
            lista: lista
        });
    }

    borrarLista(lista: Lista) {
        this.deseosService.borrarLista(lista);
    }

    editarLista(lista: Lista, slidingItem: ItemSliding) {

        slidingItem.close();
        
        const alerta = this.alertCtrl.create({

            title: 'Editar Lista',
            message: 'Renombrar Titulo de Lista',
            inputs: [
                {
                    name: 'titulo',
                    placeholder: 'Nombre de la Lista',
                    value: lista.titulo
                }
            ],
            buttons: [
                {
                    text: 'Cancelar'
                },
                {
                    text: 'Guardar',
                    handler: data => {

                        if (data.titulo.length === 0) {
                            return;
                        }

                        lista.titulo = data.titulo;
                        this.deseosService.guardarStorage();

                    }
                }
            ]

        });

        alerta.present();
    }
}