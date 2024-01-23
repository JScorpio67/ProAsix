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
      'Authorization' : 'Bearer BQDq2RcZ8_IKoUpQGAn8sOmBq2L4M-6dpdqsk_RcyimRfdu6N1wX72GuHVnig4PeXw6hj_vTmKNFCCGsFK6h_8vgOeKskx5BN78PwQe4fDXO-54Gob8'
   
    });
    return this.http.get(`${URL}/${query}`, {headers})
  }

  //METODO NUEVOS ALBUMES
  getNewReleases (){
    return this.getQuery('browse/new-releases?limit=24').pipe(
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
    return this.getQuery(`artists/${id}/top-tracks?market=es`).pipe(
      map((res:any)=>{
        return res.tracks;
      })
    );
  }


  //METODO TOPARTISTAS
 // getTopArtists (){
   // return this.getQuery{`artists`};
  //}


} 
