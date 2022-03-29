import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { MongooseModule } from '@nestjs/mongoose';

import { CatsService } from './cats.service';
import { CatSchema, Cat } from "./schemas/cat.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  controllers: [
    CatsController
  ],
  providers: [CatsService],
})
export class CatsModule {}
