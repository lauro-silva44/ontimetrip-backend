import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  MinLength,
  Matches,
  IsEmail,
} from '@nestjs/class-validator';
import { Regex } from 'src/helpers/regex';
import { MessagesHelper } from 'src/helpers/messages';

export class CreateDriverDto {
  @ApiProperty({ type: String, required: true })
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ type: String, required: true })
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ type: String, required: true })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ type: String, required: true })
  @IsNotEmpty()
  minibus_id: string;
}

export class CredentialsUserDto {
  @ApiProperty({ type: String, required: true })
  @IsNotEmpty()
  @MinLength(8)
  @Matches(Regex.password, { message: MessagesHelper.PASSWORD_SIZE })
  password: string;
}
