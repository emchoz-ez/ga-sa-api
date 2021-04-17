import { IsNotEmpty, IsString } from "class-validator";

export class CodebookBaseDto {
    @IsNotEmpty()
    @IsString()
    readonly name: string

    readonly code: string

    readonly other: string

    readonly notes: string

}