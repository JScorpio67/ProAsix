import { Component, Input } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { LoadingComponent } from '../shared/loading/loading.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{

  artistas:any[]=[];

  loading?:boolean;
  logMsg?:boolean;
  error?:boolean;



  constructor(private spotify:SpotifyService) { }

  buscar(termino:string){
    // this.spotify.getArtistas(termino).subscribe((res:any)=>{
    //   this.artistas = res.artists.items;
    // })
    if (termino.length > 0){
      this.loading=true;
      this.logMsg=false;

      this.spotify.getArtistas(termino).subscribe({

        next:(res:any)=>{
          this.artistas= res;
          this.loading=false;
        },
        error:err=>{
          this.loading=false;
          this.error=true;

          Swal.fire ({
            icon:'error',
            title:'ERROR',
            text:err.error.error.message,
            allowOutsideClick:false
          })
        }
      })
    } else {
      this.logMsg=true;
      this.artistas=[];
    }

    //this.router.navigate([`/artist`, artistaId])
  }


}
