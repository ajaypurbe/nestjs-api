
import { AuthService } from './auth.service';
import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController{
    constructor(private authService : AuthService){}

    @Post('signup')
    Singnup(){
        return this.authService.signup()
    }

    @Post('signin')
    Signin(){
        return this.authService.signin()
    }
    
    
}