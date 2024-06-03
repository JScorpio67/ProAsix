import { Injectable } from '@angular/core';
import { SignRequest } from './signRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError, BehaviorSubject, tap } from 'rxjs';
//hara falta user en el register?
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  constructor(private http: HttpClient) { }

  //CREAMOS EL METODO SIGN
  sign(formulario_input:SignRequest){
    console.log(formulario_input);
    return this.http.get('././assets/data.json')
  }


  //MANEJADOR DE ERRORES
  private handlerError(error:HttpErrorResponse){
    if (error.status===0){
      console.error('Se ha producido un error', error.error)
    } else {
      console.error('Backend retorno el codigo de estado', error.status, error.error);
      //retornamos la excepcion.
    } return throwError (()=> new Error('Algo falló, intente nuevamente'));
  }

  // SUSCRIBCION DE LOS COMPONENTES
  // get userData():Observable<User>{
  //   return this.currentUserData.asObservable();
  // }

  // get userLoginOn():Observable<boolean>{
  //   return this.currentUserLoginOn.asObservable();
  // }

}







