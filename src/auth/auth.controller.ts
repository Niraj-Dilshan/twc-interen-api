import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthUserDto } from './dto';
import { Response } from 'express'; // Import Response

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthUserDto, @Res() res: Response) {
    // Add @Res() decorator
    return this.authService.signup(dto, res);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signin(@Body() dto: AuthUserDto, @Res() res: Response) {
    // Add @Res() decorator
    return this.authService.signin(dto, res);
  }
}
