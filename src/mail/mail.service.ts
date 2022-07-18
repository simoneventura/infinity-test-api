import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {

    constructor(private mailerService: MailerService){}

    async sendUserDemolitionEmail(userEmail: string, userName: string = '', userLastName: string = ''){
        await this.mailerService.sendMail({
            to: userEmail,
            from: 'Demolizioni Infinity Car',
            subject: 'Conferma inserimento pratica',
            template: "./newDemolition",
            context: {
                clientName: userName,
                clientLastName: userLastName,
                clientEmail: userEmail
            }
        })
    }

    async sendAssignationToUser(userEmail: string, userName: string){
        await this.mailerService.sendMail({
            to: userEmail,
            from: 'Demolizioni Infinity Car',
            subject: 'InfinityCar ',
            template: "./assignationUser",
            context: {
                userName: userName
            }
        })
    }

    async sendAssignationToWrecker(wreckerEmail: string){
        await this.mailerService.sendMail({
            to: wreckerEmail,
            from: 'Demolizioni Infinity Car',
            subject: 'InfinityCar ti ha assegnato un auto' ,
            template: "./assignationWrecker"
        })
    }
}
