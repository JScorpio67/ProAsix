import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
// import { AuthService, Credential } from '../../../core/services/auth.service';
import { AuthService, Credential } from 'src/app/services/auth/firebase/auth.service';

// import { ButtonProviders } from '../components/button-providers/button-providers.component';
import { ButtonProviders } from '../../services/auth/componentes/button-providers.component'


interface LogInForm {
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
  ],
  selector: 'app-log-in',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
  providers: [],
})
export default class LogInComponent {
  hide = true;

  formBuilder = inject(FormBuilder);

  private authService = inject(AuthService);
  private router = inject(Router);
  private _snackBar = inject(MatSnackBar);

  formularioHTML: FormGroup<LogInForm> = this.formBuilder.group({
    email: this.formBuilder.control('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true,
    }),
    password: this.formBuilder.control('', {
      validators: Validators.required,
      nonNullable: true,
    }),
  });

  get isEmailValid(): string | boolean {
    const control = this.formularioHTML.get('email');

    const isInvalid = control?.invalid && control.touched;

    if (isInvalid) {
      return control.hasError('required')
        ? 'Este campo es obligatorio '
        : 'Introduce un correo valido';
    }

    return false;
  }

  async logIn(): Promise<void> {
    if (this.formularioHTML.invalid) return;

    const credential: Credential = {
      email: this.formularioHTML.value.email || '',
      password: this.formularioHTML.value.password || '',
    };

    try {
      await this.authService.logInWithEmailAndPassword(credential);
      const snackBarRef = this.openSnackBar();

      snackBarRef.afterDismissed().subscribe(() => {
        this.router.navigateByUrl('/');
      });
    } catch (error) {
      console.error(error);
    }
  }

  openSnackBar() {
    return this._snackBar.open('Inicio de sesión correcto', 'Cerrar', {
      duration: 2500,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }
}
