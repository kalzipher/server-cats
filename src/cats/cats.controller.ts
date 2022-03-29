import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateCatDto } from './cats.interface';
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
    public async getCatById(@Param() id: string) {
        return this.getCatById(id);
    }

    @Put(":id")
    public async updateCatById(@Param() id: string, cat: CreateCatDto) {
        return this.updateCatById(id, cat);
    }

    @Delete(":id") 
    public async deleteCat(@Param() id: string) {
        return this.deleteCat(id);
    }
}

