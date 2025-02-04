import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class LoginDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsStrongPassword({
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    },
        {
            message:
                'Password must be at least 6 characters long, with at least 1 lowercase, 1 uppercase, 1 number, and 1 symbol.',
        })
    password: string;
}