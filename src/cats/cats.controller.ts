import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CatUpdate, CreateCatDto, ICat } from './cats.interface';
import { CatsService } from './cats.service';

@Controller('gatos')
export class CatsController {
    
    constructor(
        private readonly catService: CatsService
    ) { }

    @Get()
    public async getAllCats() {
        return this.catService.getCats();
    }

    @Post()
    public async saveCat(@Body() cat: CreateCatDto) { 
        return this.catService.createCat(cat);
    }

    @Get(":id")
    public async getCatById(@Param("id") id: string) {
        return this.catService.getCatById(id);
    }

    @Put(":id")
    public async updateCatById(@Param() id: string, @Body() cat: CatUpdate) {
        return this.catService.updateCat(id, cat);
    }

    @Delete(":id") 
    public async deleteCat(@Param("id") id: string) {
        return this.catService.deleteCat(id);
    }
}

