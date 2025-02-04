import { Body, Controller, Get, Post, ValidationPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { LoginDto } from "src/auth/dto/login.dto";

@Controller('user')
export class UserController{
    constructor(private readonly userService: UserService) {}

    @Get()
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    @Post()
    createUser(@Body(ValidationPipe) user: LoginDto) {
        return this.userService.createUser(user);
    }

}