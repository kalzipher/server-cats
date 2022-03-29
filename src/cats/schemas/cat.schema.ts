import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Schema as SchemaMongoose } from 'mongoose';

export type CatDocument = Cat & Document;

@Schema()
export class Cat {
    
    _id: SchemaMongoose.Types.ObjectId;
    
    @Prop()
    name: string;

    @Prop()
    breed: string;

    @Prop()
    age: number;
    
    @Prop()
    photo: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
