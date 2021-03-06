import { IsNotEmpty, IsString, IsNumber, IsPositive, MinLength, MaxLength, ValidateNested} from 'class-validator';


export class MaterialDTO {

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(20)
    readonly name: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly quantity: number;

    @IsNotEmpty()
    readonly user: string;
}