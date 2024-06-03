import { Injectable, inject } from '@angular/core'
import { Auth, authState } from '@angular/fire/auth';
import { 
    AuthProvider,
    GithubAuthProvider,
    GoogleAuthProvider,
    UserCredential,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
} from 'firebase/auth';
// import { AuthService as AngularFireAuthService } from '@angular/fire/auth';

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

    logOut(): Promise<void> {
      return this.auth.signOut();
    }

    // providers

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
}




// ---------------------------------


// import { Injectable } from '@angular/core';
// import {
//   Auth,
//   AuthProvider,
//   GithubAuthProvider,
//   GoogleAuthProvider,
//   UserCredential,
//   authState,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   AngularFireAuth 
// } from '@angular/fire/auth';

// export interface Credential {
//   email: string;
//   password: string;
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   // private auth: Auth = inject(Auth);
//   constructor(private afAuth: AngularFireAuth) {}
//   // readonly authState$ = authState(this.auth);

//   signUpWithEmailAndPassword(credential: Credential): Promise<UserCredential> {
//     return this.afAuth.createUserWithEmailAndPassword(
//       credential.email,
//       credential.password
//     );
//   }

//   logInWithEmailAndPassword(credential: Credential) {
//     return this.afAuth.logInWithEmailAndPassword(
//       credential.email,
//       credential.password
//     );
//   }

//   logOut(): Promise<void> {
//     return this.afAuth.signOut();
//   }

//   // providers

//   signInWithGoogleProvider(): Promise<UserCredential> {
//     const provider = new GoogleAuthProvider();

//     return this.callPopUp(provider);
//   }

//   signInWithGithubProvider(): Promise<UserCredential> {
//     const provider = new GithubAuthProvider();

//     return this.callPopUp(provider);
//   }

//   async callPopUp(provider: AuthProvider): Promise<UserCredential> {
//     try {
//       const result = await signInWithPopup(this.auth, provider);

//       return result;
//     } catch (error: any) {
//       return error;
//     }
//   }
// }


// ---------------------------------

// auth.service.ts
// import { Injectable } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { auth } from  '@angular/fire/auth';

// export interface Credential {
//   email: string;
//   password: string;
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   constructor(private afAuth: AngularFireAuth) {}

//   signUpWithEmailAndPassword(credential: Credential) {
//     return this.afAuth.createUserWithEmailAndPassword(
//       credential.email,
//       credential.password
//     );
//   }

//   signInWithEmailAndPassword(credential: Credential) {
//     return this.afAuth.signInWithEmailAndPassword(
//       credential.email,
//       credential.password
//     );
//   }

//   signOut() {
//     return this.afAuth.signOut();
//   }
// }
