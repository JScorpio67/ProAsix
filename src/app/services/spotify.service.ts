import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, switchMap } from 'rxjs/operators'

import { AngularFireAuth } from '@angular/fire/compat/auth'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore'
import { of } from 'rxjs'; //para observable


const URL = environment.spotiUrl

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  ///////////////////////////// API
  constructor(
    private http:HttpClient,

    //autenticar usuario
    // private afAuth: AngularFireAuth,
    //manipular db
    // private firestore: AngularFirestore,

  ) { }
  //METODO QUE REUTILIZAREMOS PARA ABREVIAR OTROS METODOS, URL SPOTIFY   
  getQuery(query:string ){
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQDLLY7aa2w7KvFdxE8mydUAaId9Z-n194lq6xnzxku_dgucaRSwZtyZYxXrtw74tKk2hIU6fU-QyM4b2MW4_2YgNfEIpJkbKaW3YiYZfbDSSuf9fzY'   
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

  // private getUsuario() {
  //   return this.afAuth.authState.pipe(map(user => user?.uid));
  // }

  // addArtist(artista: any) {
  //   return this.getUsuario().pipe(
  //     switchMap(uid => {
  //       if (uid) {
  //         const userRef = this.firestore.collection('users').doc(uid);
  //         return userRef.collection('favorites').doc('artists').set({
  //           [artista.id]: artista
  //         }, { merge: true });
  //       } else {
  //         return of(null);
  //       }
  //     })
  //   ).toPromise();
  // }

  // addAlbum(album: any) {
  //   return this.getUsuario().pipe(
  //     switchMap(uid => {
  //       if (uid) {
  //         const userRef = this.firestore.collection('users').doc(uid);
  //         return userRef.collection('favorites').doc('albums').set({
  //           [album.id]: album
  //         }, { merge: true });
  //       } else {
  //         return of(null);
  //       }
  //     })
  //   ).toPromise();
  // }

  // addTrack(cancion: any) {
  //   return this.getUsuario().pipe(
  //     switchMap(uid => {
  //       if (uid) {
  //         const userRef = this.firestore.collection('users').doc(uid);
  //         return userRef.collection('favorites').doc('tracks').set({
  //           [cancion.id]: cancion
  //         }, { merge: true });
  //       } else {
  //         return of(null);
  //       }
  //     })
  //   ).toPromise();
  // }

  // getFavoritos() {
  //   return this.getUsuario().pipe(
  //     switchMap(uid => {
  //       if (uid) {
  //         const userRef = this.firestore.collection('users').doc(uid);
  //         return userRef.collection('favorites').valueChanges();
  //       } else {
  //         return of(null);
  //       }
  //     })
  //   );
  // }




} 
