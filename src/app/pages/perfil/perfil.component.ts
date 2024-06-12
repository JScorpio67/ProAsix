import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/firebase/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class UserProfileComponent implements OnInit {
  user: any;
  favoriteArtists: any[] = [];
  favoriteAlbums: any[] = [];
  favoriteSongs: any[] = [];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUserLogged().subscribe(user => {
      this.user = user;

      // Aquí puedes cargar los favoritos del usuario desde tu servicio o base de datos
      this.loadUserFavorites();
    });
  }

  loadUserFavorites(): void {
    // Aquí deberías reemplazar este código con llamadas a tu servicio o base de datos
    // para obtener los artistas, discos y canciones favoritos del usuario.
    this.favoriteArtists = [
      { name: 'Artista 1' },
      { name: 'Artista 2' }
    ];
    this.favoriteAlbums = [
      { name: 'Álbum 1' },
      { name: 'Álbum 2' }
    ];
    this.favoriteSongs = [
      { name: 'Canción 1' },
      { name: 'Canción 2' }
    ];
  }
}
