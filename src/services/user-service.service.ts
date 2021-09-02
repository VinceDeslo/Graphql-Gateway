import { Injectable } from '@nestjs/common';
import { User } from 'src/models/user';

@Injectable()
export class UserService {

    users: User[] = [{
        id: 1,
        name: 'Maddie',
        position: 'Graphic designer'
    }]

    getUser(id: number) {
        return this.users.find(user => user.id = id);
    }
}
