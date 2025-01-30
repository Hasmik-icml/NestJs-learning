import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
    private users = [{ email: '', password: '' }];

    getAllUsers() {
        return this.users;
    }

    findByEmail(email: any) {
        return this.users.filter(user => user.email === email);
    }

    createUser(user: any) {
        this.users.push(user);
        return { message: "User created" };
    }
}