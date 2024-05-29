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
  ],
  selector: 'loginForm',
  template: ``,
  styles: [``]
})

export default class NewLoginComponent implements OnInit {
  hide = true;

  formBuilder = inject(FormBuilder);

  form: FormGroup<interfaceLoginForm> = this.formBuilder.group({
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
    if (this.form.invalid) return;
    console.log(this.form.value)
  }

  constructor() { }

  ngOnInit() { }
}