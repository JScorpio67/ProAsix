import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})


export class ArtistaComponent{

  artista:any={};
  loadingArtista:boolean;

  constructor(private spotify:SpotifyService, private router:ActivatedRoute) {
    
    this.loadingArtista=true;

    this.router.params.subscribe(params =>{
      //console.log(params)
      //la pasamos el parametro ID
      this.getInfoArtista(params[`id`]);
    })
  }

  getInfoArtista(id:string){

    this.loadingArtista=true;
    
    this.spotify.getInfoArtista(id).subscribe(res=>{
      console.log(res);

      this.artista=res;

      //para cuando se haya cargado la info, dejara de salir la carga
      this.loadingArtista=false;
    })

  }
}
