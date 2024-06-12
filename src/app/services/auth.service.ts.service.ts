import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore'
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceTsService {
  userData: any;

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router,
  ) {
    //esto es un observable, hay que subscribirse | devuelve un usuario
    //authState es un metodo de FireBase
    this.afAuth.authState.subscribe(user => {
      //Si el user está, guardamos lo que tiene user en userData
      if (user) {
        this.userData = user;
        //usamos localStorage, setItem le damos nombre al item que guardaremos
        //pasamos el JSON userData a string
        localStorage.setItem('user', JSON.stringify(this.userData));
        //lo volvemos a convertir en JSON
        //a veces puede ser NULL por eso la !
        JSON.parse(localStorage.getItem('user')!)
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!)
      }
    })
  }

  //NUEVO METODO

  //recibimos un user de tipo any 
  setUserData(user: any) {
    //constante que es la ref al usr
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `user/${user.uid}`
    );

    //constante que recoge la data del usr 
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      //nos permite saber si el email ha sido verificado
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {merge: true});
  }

  //METODO LOGIN
  login(email:string, password:string){
    return this.afAuth.signInWithEmailAndPassword(email, password)
    .then(result=>{
      this.setUserData(result.user);
      this.afAuth.authState.subscribe(user=>{
        if (user) {
          this.router.navigate(['home']);
        }
      })
    }).catch(()=>{

    })
  }

  //METODO REGISTER
  register(email:string, password:string){
    return this.afAuth.createUserWithEmailAndPassword(email, password)
    .then(result=>{
      result.user?.sendEmailVerification();
      this.setUserData(result.user);
    }).catch(()=>{
      
    })
  }


}
//JSON.stringify() - SERIALIZAR
//JSON.parse()    - DESERIALIZAR