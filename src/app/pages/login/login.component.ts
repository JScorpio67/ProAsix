import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
//IMPORTAMOS LA CLASE
import { FormBuilder } from '@angular/forms';


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
    nombre:['Nombre'],
    apellidos:['Apellidos'],
    email:['ejemplo@gmail.com'],
    pass:[''],
  })
 
  constructor(private formBuilder:FormBuilder) { }
  
  ngOnInit():void{
  }

}


