import { IsNotEmpty, IsString, IsNumber, IsPositive, MinLength, MaxLength, ValidateNested} from 'class-validator';
import { Type } from 'class-transformer';
import { UserDTO } from './user.dto'

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
    // @Type(() => UserDTO)
    readonly user: string;
}