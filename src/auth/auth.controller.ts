
import { AuthService } from './auth.service';
import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController{
    constructor(private authService : AuthService){}

    @Post('signup')
    Singnup(){
        return 'I am SignUp'
    }

    @Post('signin')
    Signin(){
        return 'I am SignIn'
    }
    
    
}