import { IsNotEmpty, IsString } from "class-validator";

export class CarDto {
    @IsNotEmpty()
    @IsString()
    readonly model: string

    @IsNotEmpty()
    @IsString()
    readonly type: string

    @IsNotEmpty()
    @IsString()
    readonly year: string

}