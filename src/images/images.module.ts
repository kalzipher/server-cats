import { Module } from '@nestjs/common';
import { ImagesController } from './images.controller';
import { TheCatApiModule } from "../services";

@Module({
    imports: [TheCatApiModule],
    controllers: [ImagesController] 
})
export class ImagesModule {}
