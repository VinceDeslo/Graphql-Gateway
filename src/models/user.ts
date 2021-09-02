import { Field, ObjectType, Int } from "@nestjs/graphql";

@ObjectType()
export class User {
    @Field(type => Int)
    id: number;

    @Field()
    name: string;
    
    @Field()
    position: string;
}