import { Car } from "src/cars/entities/car.entity";
import { IWrecker } from "src/wrecker/wrecker.service";
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";

@Entity()
export class Demolition {


    constructor(demolition?: Demolition){
        /* this.id = demolition?.id; */
        this.idCanale = demolition?.idCanale;
        this.note = demolition?.note;
        this.freeCar = demolition?.freeCar;
        this.privacy = demolition?.privacy;
        this.privacyMarketing = demolition?.privacyMarketing;
        this.luogoRitiro = demolition?.luogoRitiro;
        this.referrer = demolition?.referrer;
        this.source = demolition?.source;
        this.city = demolition?.city;
        this.zipCode = demolition?.zipCode;
        this.emailProprietario = demolition?.emailProprietario
        this.ownerName = demolition?.ownerName;
        this.ownerLastname = demolition?.ownerLastname;
        this.wreckerSocialReason = '';
        this.wreckerEmail = '';
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    idCanale: string = '';

    @Column()
    note: string = '';

    @OneToOne(() => Car,  { cascade: true })
    @JoinColumn()
    freeCar: Car;

    @Column()
    assignedTo?: string = '';

    @Column()
    wreckerSocialReason?: string = '';

    @Column()
    wreckerEmail?: string = ''

    @Column()
    privacy: boolean = false;

    @Column()
    privacyMarketing: boolean = false;

    @Column()
    luogoRitiro: string = '';/* {
        "comune":{
           "id": number,
           "nome": string,
           "lat": number,
           "lng": number,
           "caps": number,
           "provincia":{
              "id": number,
              "nome": string,
              "sigla": string,
              "lat": number,
              "lon": number,
              "regione":{
                 "id": number,
                 "nome": string,
                 "nazione":{
                    "id": number,
                    "nome": string,
                    "sigla": string
                 }
              }
           },
           "name": string
        },
        "cap":{
           "id": number,
           "cap": string,
           "name": string
        },
        "civico": string,
        "indirizzo": string
    } */

    @Column()
    referrer: number = 0;

    @Column()
    source: string = '';

    @Column()
    city: number = 0;

    @Column()
    emailProprietario: string;

    @Column()
    ownerName: string;

    @Column()
    ownerLastname: string;

    @Column()
    zipCode: number = 0;

}
