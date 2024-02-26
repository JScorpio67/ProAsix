import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
//IMPORTAMOS LA CLASE
import { FormBuilder, Validators} from '@angular/forms';


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
 
  constructor(private formBuilder:FormBuilder) { }
  
  ngOnInit():void{
  }

  //METODO QUE LLAMAREMOS, PARA EL BOTON INICIAR SESION
  login(){
    if(this.loginFormulario.valid){
      console.log("Llamar al servicio de Login")
    } else {
      alert("Error al ingresar los datos")
    }
  }

}


