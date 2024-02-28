import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
//IMPORTAMOS LA CLASE
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
//import { Router } from 'express';


@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
//INYECTAMOS EN EL CONSTRUCTOR
export class LoginComponent implements OnInit {
  //CREAMOS EL FORMULARIO
  loginFormulario=this.formBuilder.group({
    email:['ejemplo@gmail.com',[Validators.required, Validators.email]],
    pass:['',[Validators.required]],
  })
  //private nombre:Router | Servicio de rutas
  constructor(private formBuilder:FormBuilder, private router:Router) { }
  
  ngOnInit():void{
  }

  get email(){
    return this.loginFormulario.controls.email;
  }

  get password(){
    return this.loginFormulario.controls.pass;
  }

  //METODO QUE LLAMAREMOS, PARA EL BOTON INICIAR SESION
  login(){
    if(this.loginFormulario.valid){
      console.log("Llamar al servicio de Login");
      //NAVEGACION DEPSUES DEL LOGIN
      this.router.navigateByUrl('/home');
      //REINICIO DEL FORMULARIO
      this.loginFormulario.reset();
    } else {
      this.loginFormulario.markAllAsTouched();
      alert("Error al ingresar los datos");
    }
  }

}


