import { Injectable } from "@nestjs/common";
import { LoginDto } from "src/auth/dto/login.dto";
import { Repository } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UserService {
    constructor(private readonly userRepository: Repository<User>) { }

    getAllUsers() {
        return this.userRepository.find();
    }

    findByEmail(email: any) {
        return this.userRepository.findOne({
            where: { email }
        });
    }

    createUser(user: LoginDto) {
        this.userRepository.save({ email: user.email, password: user.password})
        return { message: "User created" };
    }
}