import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
    private users = [];

    getAllUsers() {
        return this.users;
    }

    createUser(user: any) {
        this.users.push(user);
        return { message: "User created" };
    }
}