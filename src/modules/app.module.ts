import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './user.module';

import gqlConfig from '../configurations/gql.config'

@Module({
  imports: [
    GraphQLModule.forRoot(gqlConfig),
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_CONNSTRING),
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
