import { MailerModule, MailerOptions } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { join } from 'path';
import { MailService } from './mail.service';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        /* port:  */
        secure: true,
        auth: {
          user: 'demolizione.infinitycar@gmail.com',
          pass: 'tmbqlzwwlxjzeljz'
        },
      },
      defaults: {
        from: '"No Reply" <noreply@example.com>'
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true
        }
      }
    } as MailerOptions)
  ],
  providers: [MailService],
  exports: [MailService]
})
export class MailModule {}
