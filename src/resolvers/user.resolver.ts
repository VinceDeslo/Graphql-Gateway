import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { UserService } from 'src/services/user-service.service';
import { User } from 'src/models/user';

@Resolver()
export class UserResolver {
    constructor(private userService: UserService) {}

    @Query(returns => User)
    async getUserById(@Args('id') id: number) {
        return await this.userService.getUser(id)
    }
}
