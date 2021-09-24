import { Field, ObjectType } from "@nestjs/graphql";
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from 'mongoose';

@ObjectType()
@Schema()
export class User {
    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Field(() => String)
    @Prop()
    name: string;
    
    @Field(() => String)
    @Prop()
    position: string;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);