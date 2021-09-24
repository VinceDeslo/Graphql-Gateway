import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/models/user';

import { UserResolver } from 'src/resolvers/user.resolver';
import { UserService } from 'src/services/user.service';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: User.name,
            schema: UserSchema,
            collection: 'users',
        }])
    ],
    providers: [
        UserResolver, 
        UserService,
    ]
})
export class UserModule {}