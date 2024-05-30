import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
//import { AuthService, Credential } from '../../../core/services/auth.service';


interface interfaceLoginForm{
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
    MatSnackBarModule
  ],
  selector: 'loginForm',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})

export default class NewLoginComponent implements OnInit {
  hide = true;

  formBuilder = inject(FormBuilder);

  // private authService = inject(AuthService);

  // private router = inject(Router);

  // private _snackBar = inject(MatSnackBar);

  formularioHTML: FormGroup<interfaceLoginForm> = this.formBuilder.group({
    email: this.formBuilder.control('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true,
    }),
    password: this.formBuilder.control('', {
      validators: Validators.required,
      nonNullable: true,
    }),
  });

  logIn(): void {
    if (this.formularioHTML.invalid) return;
    console.log(this.formularioHTML.value)
  }

  // get isEmailValid(): string | boolean {
  //   const control = this.form.get('email');

  //   const isInvalid = control?.invalid && control.touched;

  //   if (isInvalid) {
  //     return control.hasError('required')
  //       ? 'This field is required'
  //       : 'Enter a valid email';
  //   }

  //   return false;
  // }

  // async logIn(): Promise<void> {
  //   if (this.form.invalid) return;

  //   const credential: Credential = {
  //     email: this.form.value.email || '',
  //     password: this.form.value.password || '',
  //   };

  //   try {
  //     await this.authService.logInWithEmailAndPassword(credential);
  //     const snackBarRef = this.openSnackBar();

  //     snackBarRef.afterDismissed().subscribe(() => {
  //       this.router.navigateByUrl('/');
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // openSnackBar() {
  //   return this._snackBar.open('Succesfully Log in 😀', 'Close', {
  //     duration: 2500,
  //     verticalPosition: 'top',
  //     horizontalPosition: 'end',
  //   });
  // }

  constructor() { }

  ngOnInit() { }
}