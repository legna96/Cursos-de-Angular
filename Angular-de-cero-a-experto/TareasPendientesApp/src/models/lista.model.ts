import { ListaItem } from "./lista-item.model";

export class Lista{
    public id:number;
    public titulo:string;
    public creadaEn: Date;
    public terminadaEn: Date;
    public terminada:boolean;
    public items: ListaItem [];

    constructor( titulo ){

        this.id = new Date().getTime();
        this.titulo = titulo;
        this.terminada = false;
        this.creadaEn = new Date();
        this.items = [];

    }
}