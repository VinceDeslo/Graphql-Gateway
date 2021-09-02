import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { UserModule } from './user.module';

import gqlConfig from '../configurations/gql.config'

@Module({
  imports: [
    GraphQLModule.forRoot(gqlConfig),
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
