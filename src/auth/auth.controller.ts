import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { LogoutDto } from './dto/logout.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    async login(@Body(ValidationPipe) loginDto: LoginDto) {
        return this.authService.login(loginDto)
    }

    @Post('logout')
    @UsePipes(new ValidationPipe)
    async logout(@Body() logoutDto: LogoutDto) {
        return this.authService.logout(logoutDto.userId);
    }
}
