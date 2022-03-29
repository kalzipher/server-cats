import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BaseService } from '../base-service/based-service.service';
import { lastValueFrom, map } from "rxjs";

import { ICat, ICatFavorite, ISaveCat, ISaveCatResponse } from "./cat.interface";

type Cat = Pick<ICat, "id" | "url">

@Injectable()
export class TheCatApiService {
    
    private apiCat: string;
    private headers: { [key: string]: string; };
    
    constructor(
        private readonly configService: ConfigService,
        private readonly baseService: BaseService,
    ) {
        this.apiCat = `${this.configService.get("THE_CAT_API")}/${this.configService.get("THE_CAT_API_VERSION")}`;
        this.headers = {
            'x-api-key': this.configService.get("THE_CAT_API_TOKEN"),
        };
    }

    public async getImagesCats() {
        const url = `${this.apiCat}/images/search`;
        const params = {
            limit: this.configService.get("THE_CAT_API_LIMIT"),
            page: this.random(1, 1000)
        };
        const $response = this.baseService.get<ICat[]>(url, { params, headers: this.headers }).pipe(
            map((cats: ICat[]) => cats.map(cat => ({ id: cat.id, url: cat.url })))
        );
        const response = await lastValueFrom<Cat[]>($response);
        return response;
    }

    public async getImagesCatsFavorites(page: number = 1) {
        const url = `${this.apiCat}/favourites`;
        const params = {
            limit: this.configService.get("THE_CAT_API_LIMIT"),
            page
        };
        
        const $response = this.baseService.get<ICatFavorite[]>(url, { params, headers: this.headers });
        const response = await lastValueFrom<ICatFavorite[]>($response);
        return response;
    }

    public async saveCatFavorite(cat: ISaveCat) {
        const url = `${this.apiCat}/favourites`;
        cat.sub_id = this.configService.get("SUB_ID");
        const $response = this.baseService.post<ISaveCatResponse, ISaveCat>(url, cat, { headers: this.headers });
        const response = await lastValueFrom<ISaveCatResponse>($response);
        return response;
    }

    private random(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
