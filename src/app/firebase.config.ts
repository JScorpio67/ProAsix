import { EnvironmentProviders, importProvidersFrom } from "@angular/core";

import { getAuth, provideAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

const firebaseProviders: EnvironmentProviders = importProvidersFrom([
    provideFirebaseApp(() => initializeApp({"projectId":"proyectoasix-86ff1","appId":"1:1029543546243:web:8dc69137a8f15067de7ab6","storageBucket":"proyectoasix-86ff1.appspot.com","apiKey":"AIzaSyDxcDL3rgUDHr-lMSg1QMfBnw-ze7qDxeU","authDomain":"proyectoasix-86ff1.firebaseapp.com","messagingSenderId":"1029543546243","measurementId":"G-1ZEZ4BNB22"})),
    provideAuth(() => getAuth())
])

export {firebaseProviders}