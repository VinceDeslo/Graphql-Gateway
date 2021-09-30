import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';
import { User, UserDocument } from 'src/models/user';

import { CreateUserInput, ListUserInput, UpdateUserInput } from '../inputs/user.inputs'

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
    ) {}

    create(payload: CreateUserInput) {
        const createdUser = new this.userModel(payload)
        return createdUser.save();
    }

    list(filters: ListUserInput) {
        return this
            .userModel
            .find({ ...filters })
            .exec()
    }

    getById(_id: MongooseSchema.Types.ObjectId) {
        return this
            .userModel
            .findById(_id)
            .exec();
    }

    update(payload: UpdateUserInput) {
        return this
            .userModel
            .findByIdAndUpdate(
                payload._id, 
                payload, 
                { new: true }
            )
            .exec()
    }

    delete(_id: MongooseSchema.Types.ObjectId){
        return this
            .userModel
            .findByIdAndDelete(_id)
            .exec()
    }
}
