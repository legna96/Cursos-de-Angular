import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
})

export class PendientesPage implements OnInit {

    constructor(
        private navCtrl: NavController,
        private alertCtrl: AlertController
    ) {

    }

    ngOnInit() { }

    agregarLista() {
        
        const alerta = this.alertCtrl.create({

            title: 'Nueva lista',
            message: 'Nombre de la nueva lista que desea',
            inputs: [
                {
                    name: 'titulo',
                    placeholder: 'Nombre de la Lista'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar'
                },
                {
                    text: 'Agregar',
                    handler: data =>{

                        if(data.titulo.length === 0 ){
                            return;
                        }

                        this.navCtrl.push( AgregarPage, {
                            titulo: data.titulo
                        } );
                    }
                }
            ]

        });

        alerta.present();
    }

}