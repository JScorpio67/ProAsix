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
      'Authorization' : 'Bearer BQByAKRAZxYm_NZTsMQ1hDsrfIdv7iTc4JymCz25wZEtBKXSLj6Sr7MRBtHRyz9D3OhLtvrmo0NEDdUWm2cgTrPy1aDfGcs2dkg6JoL4LjNwjdGDYBg'
   
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

} 
