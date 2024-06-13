import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from 'firebase/auth';
import { Subscription } from 'rxjs';
import { CommonModule, NgIf } from '@angular/common';
import { AuthService } from 'src/app/services/auth/firebase/auth.service'; // Asegúrate de ajustar la ruta según la ubicación de tu servicio de autenticación

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit, OnDestroy {


  user: any;
  private authSubscription: Subscription | undefined;

  constructor(
    private authSrv: AuthService
  ) { }

  ngOnInit(): void {
    this.authSubscription = this.authSrv.authState$.subscribe(user => {
      this.user = user;
    });
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

}
