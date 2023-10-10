import { Injectable } from '@nestjs/common';


@Injectable({})
export class AuthService {
    signin() {
        return{ msg : "I have SignIn with Ajay" }
    }

    signup() {
        return { msg : "I have SignUp with Ajay" }
    }
}