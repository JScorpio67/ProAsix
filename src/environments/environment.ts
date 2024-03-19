// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //optimizacion de peticiones token
  spotiUrl:'https://api.spotify.com/v1',

  //firebase
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  firebaseConfig: {
  apiKey: "AIzaSyDxcDL3rgUDHr-lMSg1QMfBnw-ze7qDxeU",
  authDomain: "proyectoasix-86ff1.firebaseapp.com",
  projectId: "proyectoasix-86ff1",
  storageBucket: "proyectoasix-86ff1.appspot.com",
  messagingSenderId: "1029543546243",
  appId: "1:1029543546243:web:8dc69137a8f15067de7ab6",
  measurementId: "G-1ZEZ4BNB22"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
