import { Field, InputType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose'
import { User } from '../models/user'

@InputType()
export class CreateUserInput {
    @Field(() => String)
    name: string;
    
    @Field(() => String)
    position: string;
}

@InputType()
export class ListUserInput {
    @Field(() => String, { nullable: true })
    _id?: MongooseSchema.Types.ObjectId;
    
    @Field(() => String, { nullable: true })
    name?: string;

    @Field(() => String, { nullable: true })
    position?: string;
}

@InputType()
export class UpdateUserInput {
    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;
    
    @Field(() => String, { nullable: true })
    name?: string;
    
    @Field(() => String, { nullable: true })
    position?: string;
}