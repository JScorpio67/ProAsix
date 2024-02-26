import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
//IMPORTAMOS LA CLASE
import { FormBuilder, Validators} from '@angular/forms';


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
    //nombre:['Nombre'],
    //apellidos:['Apellidos'],
    email:['ejemplo@gmail.com',[Validators.required, Validators.email]],
    pass:[''],
  }) 
  constructor(private formBuilder:FormBuilder) { }
  
  ngOnInit():void{
  }

}


