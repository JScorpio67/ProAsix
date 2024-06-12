import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
//IMPORTAMOS LA CLASE
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login/login.service';
import { LoginRequest } from 'src/app/services/auth/login/loginRequest';
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
  loginError:string="";
  //CREAMOS EL FORMULARIO
  loginFormulario = this.formBuilder.group({
    email: ['ejemplo@gmail.com', [Validators.required, Validators.email]],
    pass: ['', [Validators.required]],
  })

  //private nombre:Router | Servicio de rutas   || inyectamos el metodo login del servicio login
  constructor(private formBuilder: FormBuilder, private router: Router, private loginServicio: LoginService) { }

  ngOnInit(): void {
  }

  get email() {
    return this.loginFormulario.controls.email;
  }

  get password() {
    return this.loginFormulario.controls.pass;
  }

  //METODO QUE LLAMAREMOS, PARA EL BOTON INICIAR SESION
  login() {
    if (this.loginFormulario.valid) {
      //console.log("Llamar al servicio de Login");
      this.loginServicio.login(this.loginFormulario.value as LoginRequest).subscribe({
        next: (userData) => {
          console.log(userData)
        },
        error: (errorData) => {
          console.error(errorData);
          this.loginError=errorData
        },
        complete: () => {
          console.info("Login completo");
          //NAVEGACION DEPSUES DEL LOGIN
          this.router.navigateByUrl('/home');
           //REINICIO DEL FORMULARIO
          this.loginFormulario.reset();
        }

      })

      

    } else {
      this.loginFormulario.markAllAsTouched();
      alert("Error al ingresar los datos");
    }
  }

}


