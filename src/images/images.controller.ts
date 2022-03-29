import { Body, Controller, Get, Post } from '@nestjs/common';
import { ISaveCat } from 'src/services/the-cat-api/cat.interface';
import { TheCatApiService } from 'src/services/the-cat-api/the-cat-api.service';

@Controller('imagenes')
export class ImagesController {

    constructor(
        private readonly catService: TheCatApiService
    ) { }
    
    @Get()
    public async getImages() {
        return this.catService.getImagesCats()
    }

    @Get("/favoritos")
    public async getImagesFavoites() {
        return this.catService.getImagesCatsFavorites();
    }

    @Post("/favoritos")
    public async postImagesFavorites(@Body() cat: ISaveCat) {
        return this.catService.saveCatFavorite(cat);
    }
}
