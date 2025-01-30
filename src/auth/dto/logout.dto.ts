import { IsNotEmpty, IsString } from "class-validator";
import { UUID } from "crypto";

export class LogoutDto {
    @IsString()
    @IsNotEmpty()
    userId: UUID
}