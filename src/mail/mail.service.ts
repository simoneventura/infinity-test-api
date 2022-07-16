import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {

    constructor(private mailerService: MailerService){}

    async sendUserDemolitionEmail(userEmail: string, userName: string, userLastName: string){
        await this.mailerService.sendMail({
            to: userEmail,
            from: 'Demolizioni Infinity Car',
            subject: 'Conferma inserimento pratica',
            template: "./newDemolition",
            context: {
                clientName: userName,
                clientLastname: userLastName,
                clientEmail: userEmail
            }
        })
    }
}
