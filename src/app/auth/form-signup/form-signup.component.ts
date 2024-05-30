import { Component, inject } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';

import { AuthService, Credential } from 'src/app/services/auth/firebase/auth.service';

//import { AuthService, Credential } from '../../../core/services/auth.service';
// import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
// import { ButtonProviders } from '../components/button-providers/button-providers.component';


interface interfazSignUpForm {
  names: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  standalone: true,
  imports:[
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    NgIf,
  ],
  selector: 'signupForm',
  templateUrl: './form-signup.component.html',
  styleUrls: ['./form-signup.component.css']
})

export default class NewSignUpComponent{
  hide = true;

  formBuilder = inject(FormBuilder);

  formularioHTML: FormGroup<interfazSignUpForm> = this.formBuilder.group({
    names: this.formBuilder.control('', {
      validators: Validators.required,
      nonNullable: true,
    }),
    lastName: this.formBuilder.control('', {
      validators: Validators.required,
      nonNullable: true,
    }),
    email: this.formBuilder.control('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true,
    }),
    password: this.formBuilder.control('', {
      validators: Validators.required,
      nonNullable: true,
    }),
  });

  private servicioAuth = inject(AuthService)

  signUp(): void {
    if (this.formularioHTML.invalid) return;

    const credential : Credential = {
      // || por si tiene un valor indefinido 
      email: this.formularioHTML.value.email || '',
      password: this.formularioHTML.value.password || '' ,
    };

    try {
      this.servicioAuth.signInWithEmailAndPassword(credential);
      
    } catch (error) {
      
    }


    console.log(this.formularioHTML.value)
  }

  get isEmailValid(): string | boolean {
    const control = this.formularioHTML.get('email');

    const isInvalid = control?.invalid && control.touched;

    if (isInvalid) {
      return control.hasError('required')
        ? 'Este campo es obligatorio'
        : 'Introduce un formato de correo valido';
    }

    return false;
  }

  //constructor() { }

  //ngOnInit() { }
}