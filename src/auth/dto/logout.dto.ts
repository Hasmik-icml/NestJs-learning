import { IsNotEmpty, IsString, IsUUID } from "class-validator";
import { UUID } from "crypto";

export class LogoutDto {
    @IsUUID()
    @IsNotEmpty()
    userId: UUID
}