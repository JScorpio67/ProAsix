import { Injectable, inject } from '@angular/core'
import { Auth, authState } from '@angular/fire/auth';
import { 
    AuthProvider,
    GithubAuthProvider,
    GoogleAuthProvider,
    User,
    UserCredential,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
} from 'firebase/auth';
import { Observable } from 'rxjs';
// import { firebase } from 'firebase/compat/app';


// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { AuthService as AngularFireAuthService } from '@angular/fire/auth';

export interface Credential {
    email:string;
    password:string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService{

  // constructor(private auth:AngularFireAuth){ }

    //inyeccion, doc firebase
    private auth: Auth = inject(Auth);

    readonly authState$ = authState(this.auth)

    signUpWithEmailAndPassword(credencial:Credential): Promise<UserCredential>{
        //necesita el auth (inyectado), email (string) y pass(string)
        return createUserWithEmailAndPassword(
            this.auth,
            credencial.email,
            credencial.password
        )
    }

    logInWithEmailAndPassword(credencial:Credential){
        return signInWithEmailAndPassword(
            this.auth,
            credencial.email,
            credencial.password
        )
    }

    //CERRAR SESION
    logOut(): Promise<void> {
      return this.auth.signOut();
    }


    // providers GOOGLE, GITHUB
    signInWithGoogleProvider(): Promise<UserCredential> {
        const provider = new GoogleAuthProvider();
        return this.callPopUp(provider);
    }

    signInWithGithubProvider(): Promise<UserCredential> {
        const provider = new GithubAuthProvider();

        return this.callPopUp(provider);
  }

  async callPopUp(provider: AuthProvider): Promise<UserCredential> {
    try {
      const result = await signInWithPopup(this.auth, provider);

      return result;
    } catch (error: any) {
      return error;
    }
  }

  getUserLogged(): Observable<User | null>{
    return this.authState$
  }

}



