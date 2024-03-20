import { Injectable } from '@angular/core';
import { SignRequest } from './signRequest';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  constructor() { }

  //CREAMOS EL METODO SIGN
  sign(formulario_input:any){
    console.log(formulario_input);
  }
}
