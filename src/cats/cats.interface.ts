export interface ICat {
    name: string;
    age: number;
    breeds: string;
    photo: string;
}

export interface CreateCatDto {
    name: string;
    breed: string;
    age: number;
    photo: string;
}

export interface Cat extends CreateCatDto {
    id: string;
}

export type CatUpdate = Omit<Cat, "id">;
