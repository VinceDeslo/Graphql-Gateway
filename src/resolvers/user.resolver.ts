import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

import { UserService } from 'src/services/user.service';
import { User } from 'src/models/user';

@Resolver()
export class UserResolver {
    constructor(private userService: UserService) {}

    @Query(() => User)
    async user(
        @Args('id', { type: () => String }) id: MongooseSchema.Types.ObjectId,
    ) {
        return this.userService.getById(id);
    }
}
