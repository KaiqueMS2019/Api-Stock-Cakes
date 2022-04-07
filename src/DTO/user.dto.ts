import { IsNotEmpty, IsString, IsNumber, IsPositive, MinLength, MaxLength} from 'class-validator';

export class UserDTO {

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(25)
    readonly name : string;

}


