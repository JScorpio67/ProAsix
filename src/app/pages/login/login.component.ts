import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
//IMPORTAMOS LA CLASE
//import { FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  //standalone: true,
  //imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
//INYECTAMOS EN EL CONSTRUCTOR
export class LoginComponent implements OnInit {
  loginFormulario=this.formBuilder.group({
    email:['jair@gmail.com'],
    pass:[''],
  })
  constructor(private formBuilder:FormBuilder) { }
  
  ngOnInit():void{
  }

}


