import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators'

const URL = environment.spotiUrl

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }
  //METODO QUE REUTILIZAREMOS PARA ABREVIAR OTROS METODOS, URL SPOTIFY   
  getQuery(query:string ){
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQCgzqKlMZZ6KCCUBTX5qWM1klZCzMs4e87SLBoQxrj8R4ZXIh7WL6Sh32hbZSRb6mjcjMURkVU7xtS_agJKvLskt49qGWIOkUoD8RspIQssURXHG84'
   
    });
    return this.http.get(`${URL}/${query}`, {headers})
  }

  //METODO NUEVOS ALBUMES
  getNewReleases (){
    
    return this.getQuery('browse/new-releases?limit=20').pipe(
      map((res:any)=>{
        return res.albums.items;
      })
    );
  }

  //METODO ARTISTAS, PORTADAS, ETC
  getArtistas(termino:string){

    return this.getQuery(`search?query=${termino}&type=artist&market=es&limit=15`).pipe(
      map((res:any)=>{
        return res.artists.items;
      })
    );
  }
    
  //METODO PERFIL ARTISTA
  getInfoArtista(id:string){
    return this.getQuery(`artists/${id}`)
  }


  //METODO TRACKS
  getTopTracks(id:string) {
    return this.getQuery(`artist/${id}/top-tracks`)
  }
} 



  //METODO TRACKS
  //getTopTracks(id:string) {
    //return this.getQuery(`artist/${id}/top-tracks`)
  //}