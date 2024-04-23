import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/services/auth/login/login.service';
import { User } from 'src/app/services/auth/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  nuevasCanciones: any[] = [];
  loading: boolean = true;
  error: boolean = false;
  userLoginOn: boolean = false;
  userData?:User;

  constructor(private spotify: SpotifyService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe((userLoginOn: boolean) => {
      this.userLoginOn = userLoginOn;
    });

    this.spotify.getNewReleases().subscribe({
      next: (res) => {
        this.nuevasCanciones = res;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.error = true;

        console.error('Error al obtener nuevas canciones:', err);

        Swal.fire({
          icon: 'error',
          title: 'ERROR',
          text: err.error.error.message,
          allowOutsideClick: false
        });
      }
    });
  }
}
