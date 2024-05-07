// src/user/dto/register-user.dto.ts
import { IsEmail, IsOptional, IsString, Matches } from 'class-validator';

export class UpdateContactDto {
  @IsOptional({ message: 'Name is required' })
  @IsString({ message: 'Name can only contain A-Z, a-z,., and spaces' })
  name: string;

  @IsOptional({ message: 'Email is required' })
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @IsOptional({ message: 'Phone number is required' })
  @Matches(/^\d{10}$|^\+\d{1,2}\s?\d{9}$/, {
    message: 'Invalid phone number format',
  })
  phone: string;

  @IsOptional({ message: 'Gender is required' })
  @IsString({ message: 'Gender must be male or female' })
  gender: 'male' | 'female';
}
