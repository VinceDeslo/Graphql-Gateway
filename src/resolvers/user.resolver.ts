import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

import { UserService } from 'src/services/user.service';
import { User } from 'src/models/user';
import { ListUserInput, UpdateUserInput } from 'src/inputs/user.inputs';

@Resolver()
export class UserResolver {
    constructor(private userService: UserService) {}

    @Query(() => User)
    async user(
        @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
    ) {
        return this.userService.getById(_id);
    }

    @Query(() => [User])
    async users(
        @Args('filters', { nullable: true }) filters?: ListUserInput,
    ) {
        return this.userService.list(filters);
    }

    @Mutation(() => User)
    async createUser(@Args('payload') payload: UpdateUserInput) {
        return this.userService.update(payload);
    }

    @Mutation(() => User)
    async updateUser(@Args('payload') payload: UpdateUserInput) {
        return this.userService.update(payload);
    }

    @Mutation(() => User)
    async deleteUser(
        @Args('id', { type: () => String }) id: MongooseSchema.Types.ObjectId,
    ) {
        return this.userService.delete(id);
    }
}
