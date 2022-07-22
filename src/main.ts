import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
const fs = require('fs');

async function bootstrap() {
  /* const httpsOptions = {
    key: fs.readFileSync('./secrets/private-key.pem'),
    cert: fs.readFileSync('./secrets/public-certificate.pem'),
  }; */
  const app = await NestFactory.create<NestExpressApplication>(AppModule/* , { httpsOptions } */);
  app.enableCors({
    "origin": "https://www.infinitycarsnc.com/", 
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  } as CorsOptions);

  

  const config = new DocumentBuilder()
  .setTitle('Temporary backend API')
  .setDescription('Basic description of temporary API')
  .setVersion('1.0')
  .addTag('infinitycar')
  .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
