import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";

import { AppController } from './app.controller';
import { ImagesModule } from './images/images.module';
import { CatsModule } from './cats/cats.module';
import { MongoModule } from './mongo/mongo.module';

@Module({
  imports: [
    MongoModule,
    ConfigModule.forRoot({
      envFilePath: ['.dev.env', '.prod.env'],
      isGlobal: true
    }),
    ImagesModule,
    CatsModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
