import { Injectable } from '@nestjs/common';
import { User, Bookmar } from '@prisma/client'


@Injectable({})
export class AuthService {
    signin() {
        return{ msg : "I have SignIn with Ajay" }
    }
  
    signup() {
        return { msg : "I have SignUp with Ajay" }
    }
}