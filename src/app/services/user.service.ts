import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {}

  private getCurrentUser() {
    return this.afAuth.authState.pipe(
      map(user => {
        console.log('Current user:', user);
        return user?.uid;
      })
    );
  }

  addFavoriteArtist(artist: any) {
    return this.getCurrentUser().pipe(
      switchMap(uid => {
        console.log('User ID:', uid);
        if (uid) {
          const userRef = this.afs.collection('users').doc(uid);
          console.log('Adding favorite artist:', artist);
          return userRef.collection('favorites').doc('artists').set({
            [artist.id]: artist
          }, { merge: true });
        } else {
          console.error('No user ID found');
          return of(null);
        }
      })
    ).toPromise().then(() => {
      console.log('Artist added successfully');
    }).catch(error => {
      console.error('Error adding artist:', error);
    });
  }

  addFavoriteAlbum(album: any) {
    return this.getCurrentUser().pipe(
      switchMap(uid => {
        console.log('User ID:', uid);
        if (uid) {
          const userRef = this.afs.collection('users').doc(uid);
          console.log('Adding favorite album:', album);
          return userRef.collection('favorites').doc('albums').set({
            [album.id]: album
          }, { merge: true });
        } else {
          console.error('No user ID found');
          return of(null);
        }
      })
    ).toPromise().then(() => {
      console.log('Album added successfully');
    }).catch(error => {
      console.error('Error adding album:', error);
    });
  }

  addFavoriteTrack(track: any) {
    return this.getCurrentUser().pipe(
      switchMap(uid => {
        console.log('User ID:', uid);
        if (uid) {
          const userRef = this.afs.collection('users').doc(uid);
          console.log('Adding favorite track:', track);
          return userRef.collection('favorites').doc('tracks').set({
            [track.id]: track
          }, { merge: true });
        } else {
          console.error('No user ID found');
          return of(null);
        }
      })
    ).toPromise().then(() => {
      console.log('Track added successfully');
    }).catch(error => {
      console.error('Error adding track:', error);
    });
  }

  getFavorites() {
    return this.getCurrentUser().pipe(
      switchMap(uid => {
        console.log('User ID:', uid);
        if (uid) {
          const userRef = this.afs.collection('users').doc(uid);
          console.log('Fetching favorite items');
          return userRef.collection('favorites').valueChanges();
        } else {
          console.error('No user ID found');
          return of(null);
        }
      })
    );
  }
}
