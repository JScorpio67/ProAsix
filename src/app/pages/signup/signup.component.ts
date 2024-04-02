import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
//IMPORTAMOS LA CLASE
import { FormBuilder, Validators} from '@angular/forms';
import { SignService } from 'src/app/services/auth/sign/sign.service';
import { SignRequest } from 'src/app/services/auth/sign/signRequest';


@Component({
  selector: 'app-signup',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
//INYECTAMOS EN EL CONSTRUCTOR
export class SignupComponent implements OnInit {
  //CREAMOS EL FORMULARIO
  FormularioSignup=this.formBuilder.group({
    nombre:['', [Validators.required] ],
    apellidos:['', [Validators.required] ],
    email:['', [Validators.required, Validators.email]],
    edad: ['', [Validators.required]],
    pass:['', [Validators.required] ],
  }) 

  //private nombre:Router | Servicio de rutas   || inyectamos el metodo login del servicio login
  constructor(private formBuilder:FormBuilder, private router:Router, private signServicio:SignService ) { }

  ngOnInit():void{
  }

  get nombre(){
    return this.FormularioSignup.controls.nombre;
  }

  get apellidos(){
    return this.FormularioSignup.controls.apellidos;
  }

  get email(){
    return this.FormularioSignup.controls.email;
  }
  get password(){
    return this.FormularioSignup.controls.pass;
  }

  //METODO QUE LLAMAREMOS, PARA EL BOTON INICIAR SESION
  sign(){
    if(this.FormularioSignup.valid){
      //console.log("Llamar al servicio de Login");
      this.signServicio.sign(this.FormularioSignup.value as SignRequest);
      //NAVEGACION DEPSUES DEL LOGIN
      this.router.navigateByUrl('/home');
      
      //REINICIO DEL FORMULARIO
      this.FormularioSignup.reset();

    } else {
      this.FormularioSignup.markAllAsTouched();
      alert("Error al ingresar los datos");
    }
  }
}


