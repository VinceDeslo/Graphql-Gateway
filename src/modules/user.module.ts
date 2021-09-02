import { Module } from '@nestjs/common';
import { UserResolver } from 'src/resolvers/user.resolver';
import { UserService } from 'src/services/user-service.service';

@Module({
    providers: [
        UserResolver, 
        UserService
    ]
})
export class UserModule {}