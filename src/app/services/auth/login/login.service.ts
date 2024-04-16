import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  //CREAMOS EL METODO LOGIN
  //login(formulario_input:any){ //any es muy generico
  login(formulario_input:LoginRequest): Observable<User> {
    return this.http.get<User>('././assets/data.json')
    //return this.http.post<any>('././assets/data.json', formulario_input)
  }
}
