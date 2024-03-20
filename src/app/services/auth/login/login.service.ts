import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  //CREAMOS EL METODO LOGIN
  //login(formulario_input:any){ //any es muy generico
  login(formulario_input:LoginRequest){
    console.log(formulario_input);
  }
}
