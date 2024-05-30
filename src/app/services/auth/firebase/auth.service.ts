import { Injectable, inject } from '@angular/core'
import { Auth, authState } from '@angular/fire/auth';
import { 
    UserCredential,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword 
} from 'firebase/auth';
//import { Auth } from 'firebase/auth';

export interface Credential {
    email:string;
    password:string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService{
    //inyeccion, doc firebase
    private auth: Auth = inject(Auth);

    readonly authState$ = authState(this.auth)

    signInWithEmailAndPassword(credencial:Credential): Promise<UserCredential>{
        //necesita el auth (inyectado), email (string) y pass(string)
        return createUserWithEmailAndPassword(
            this.auth,
            credencial.email,
            credencial.password
        )
    }

    loginEmailCont(credencial:Credential){
        return signInWithEmailAndPassword(
            this.auth,
            credencial.email,
            credencial.password
        )
    }
}