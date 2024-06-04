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

// import { AuthService, Credential } from '../../../core/services/auth.service';
import { AuthService, Credential } from 'src/app/services/auth/firebase/auth.service';

import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
// import { ButtonProviders } from '../components/button-providers/button-providers.component';
import { ButtonProviders } from '../../services/auth/componentes/button-providers.component'


interface SignUpForm {
  names: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule,
    NgIf,
    MatSnackBarModule,
    ButtonProviders,
    CommonModule
  ],
  selector: 'app-sign-up',
  templateUrl: './form-signup.component.html',
  providers: [],
  styleUrls: ['./form-signup.component.css'],
})
export default class SignUpComponent {
  hide = true;

  formBuilder = inject(FormBuilder);

  formularioHTML: FormGroup<SignUpForm> = this.formBuilder.group({
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

  // auth da problemas
  private authSrv = inject(AuthService);
  private _router = inject(Router);
  private _snackBar = inject(MatSnackBar);

  get isEmailValid(): string | boolean {
    const control = this.formularioHTML.get('email');

    const isInvalid = control?.invalid && control.touched;

    if (isInvalid) {
      return control.hasError('required')
        ? 'Este campo es obligatorio'
        : 'Introduce un correo valido';
    }

    return false;
  }

  async signUp(): Promise<void> {
    if (this.formularioHTML.invalid) return;

    const credential: Credential = {
      email: this.formularioHTML.value.email || '',
      password: this.formularioHTML.value.password || '',
    };

    try {
      await this.authSrv.signUpWithEmailAndPassword(credential);
      const snackBarRef = this.openSnackBar();
      snackBarRef.afterDismissed().subscribe(() => {
        this._router.navigateByUrl('/home');
        console.log(credential.email);
        this.authSrv.logInWithEmailAndPassword
      });
    } catch (error) {
      console.error(error);
    }
  }

  openSnackBar() {
    return this._snackBar.open('Registrado correctamente', 'Cerrar', {
      duration: 2500,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }
}
