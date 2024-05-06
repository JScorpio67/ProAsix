import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
//IMPORTAMOS LA CLASE
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
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
  signError:string="";
  //CREAMOS EL FORMULARIO
  FormularioSignup=this.formBuilder.group({
    nombres:['', [Validators.required] ],
    apellidos:['', [Validators.required] ],
    username:['', [Validators.required, Validators.minLength(6)]],
    email:['', [Validators.required, Validators.email]],
    edad: ['', [Validators.required]],
    pass:['', [Validators.required, Validators.minLength(8)] ],
  }) 

  //private nombre:Router | Servicio de rutas   || inyectamos el metodo login del servicio login
  constructor(private formBuilder:FormBuilder, private router:Router, private signServicio:SignService ) { }

  ngOnInit():void{
  }

  get nombres(){
    return this.FormularioSignup.controls.nombres;
  }

  get apellidos(){
    return this.FormularioSignup.controls.apellidos;
  }

  get username(){
    return this.FormularioSignup.controls.username;
  }

  get email(){
    return this.FormularioSignup.controls.email;
  }
  get edad(){
    return this.FormularioSignup.controls.edad;
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


