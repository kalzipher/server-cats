import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Cat, CatDocument } from "./schemas/cat.schema";
import { CreateCatDto, Cat as ICat, CatUpdate } from './cats.interface';

@Injectable()
export class CatsService {

    constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

    async createCat(createCatDto: CreateCatDto): Promise<ICat> {
        const createdCat = new this.catModel(createCatDto);
        return createdCat.save().then(this.mapperResponse);
    }

    public async getCats(): Promise<ICat[]> {
        return this.catModel.find().exec().then((cats:Cat[]) => cats.map(this.mapperResponse));
    }

    public async getCatById(id: string): Promise<ICat> {
        return this.catModel.findById(id).exec().then(this.mapperResponse);
    }

    public async updateCat(id: string, cat: CatUpdate): Promise<void> {
        return this.catModel.findByIdAndUpdate(id, cat);
    }

    public async deleteCat(id: string): Promise<void> {
        return this.catModel.findByIdAndDelete(id);
    }

    private mapperResponse(cat: Cat): ICat {
        return {
            id: cat._id.toString(),
            age: cat.age,
            name: cat.name,
            breed: cat.breed,
            photo: cat.photo,
        }
    }
}
