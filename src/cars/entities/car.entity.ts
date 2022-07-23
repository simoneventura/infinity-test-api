import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Car {

    constructor(car?: Car){
        this.targa = car?.targa;
        this.marca = car?.marca;
        this.automodello = car?.automodello;
        this.autoalimentazione = car?.autoalimentazione;
        this.numeroporte = car?.numeroporte;
        this.km = car?.km;
        this.anno = car?.anno;
        this.note = car?.note;
        this.vaInMoto = car?.vaInMoto ? car.vaInMoto : false;
        this.blocked = car?.blocked ? car?.blocked : false;
    }

    @PrimaryColumn()
    targa: string = '';

    @Column()
    marca: string = '';

    @Column()
    automodello: string = '';

    @Column()
    autoalimentazione: number;

    @Column()
    numeroporte: number;

    @Column()
    km: number = 0;

    @Column()
    anno: number = 0;

    @Column()
    note: string = '';

    @Column()
    vaInMoto: boolean = false;

    @Column()
    blocked: boolean = false;
}
