export interface ICategoryCat {
    id: string | number;
    name: string;
}

export interface IBreed {
    id: string;
    name: string;
    temperament: string;
    life_span: string;
    alt_names: string;
    wikipedia_url: string;
    origin: string;
    weight_imperial: string;
    experimental: number;
    hairless: number;
    natural: number;
    rare: number;
    rex: number;
    suppress_tail: number;
    short_legs: number;
    hypoallergenic: number;
    adaptability: number;
    affection_level: number;
    country_level: number;
    country_code: string;
    child_friendly: number;
    dog_friendly: number;
    energy_level: number;
    grooming: number;
    health_issues: number;
    intelligence: number;
    sheddin_level: number;
    social_needs: number;
    stranger_friendly: number;
    vocalisation: number;
}

export interface ICat {
    id: string;
    url: string;
    sub_id: string;
    create_at: string;
    original_name: string;
    categories: ICategoryCat[],
    breeds: IBreed[]
}


export interface ICatFavorite {
    created_at: Date;
    id:         number;
    image:      ICatFavoriteImage;
    image_id:   string;
    sub_id:     null;
    user_id:    string;
}

export interface ICatFavoriteImage {
    id:  string;
    url: string;
}

export interface ISaveCatResponse {
    id: number | string;
    message: string;
}

export interface ISaveCat {
  image_id: string,
  sub_id?: string
}
