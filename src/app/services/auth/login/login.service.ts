import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError, BehaviorSubject, tap } from 'rxjs'; 
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //DEFINICION DE LOS BEHAVIOUR SUBJECTS
  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<User> = new BehaviorSubject<User>({id:0, email:''});

  constructor(private http: HttpClient) { }
  //CREAMOS EL METODO LOGIN
  //login(formulario_input:any){ //any es muy generico
  login(formulario_input:LoginRequest): Observable<User> {
    return this.http.get<User>('././assets/data.json').pipe(
      //TAP PARA EMITIR LA INFORMACION A LOS COMPONENTES SUSCRITOS
      tap( (userData : User) =>{
        this.currentUserData.next(userData);
        this.currentUserLoginOn.next(true);
      }),
      catchError(this.handlerError)
    );
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
  //SUSCRIBCION DE LOS COMPONENTES
  get userData():Observable<User>{
    return this.currentUserData.asObservable();
  }

  get userLoginOn():Observable<boolean>{
    return this.currentUserLoginOn.asObservable();
  }

}

