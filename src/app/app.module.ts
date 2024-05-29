import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { NavbarComponent } from './pages/shared/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { ArtistaComponent } from './pages/artista/artista.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { TarjetasComponent } from './pages/tarjetas/tarjetas.component';
import { LoadingComponent } from './pages/shared/loading/loading.component';
import { LinkseguroPipe } from "./pipes/linkseguro.pipe";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
//import { FormSignupComponent } from './auth/form-signup.component'



//FIREBASE
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

//import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
//import { environment } from 'src/environments/environment';
//import { getAuth, provideAuth } from '@angular/fire/auth';

//import { LoginService } from './services/auth/login.service';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SearchComponent,
        NavbarComponent,
        ArtistaComponent,
        LoginComponent,
        TarjetasComponent,
        SignupComponent,
       // FormSignupComponent,
        
    ],
    providers: [
    provideAnimationsAsync()
  ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NoimagePipe,
        LoadingComponent,
        LinkseguroPipe,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,

        //FIREBASE
        //AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        AngularFirestoreModule,
        
        //firebaseconfig
        // provideFirebaseApp(() => initializeApp({"projectId":"proyectoasix-86ff1","appId":"1:1029543546243:web:8dc69137a8f15067de7ab6","storageBucket":"proyectoasix-86ff1.appspot.com","apiKey":"AIzaSyDxcDL3rgUDHr-lMSg1QMfBnw-ze7qDxeU","authDomain":"proyectoasix-86ff1.firebaseapp.com","messagingSenderId":"1029543546243","measurementId":"G-1ZEZ4BNB22"})),
        // provideAuth(() => getAuth())


        //provideFirebaseApp(() => initializeApp({"projectId":"proyectoasix-86ff1","appId":"1:1029543546243:web:8dc69137a8f15067de7ab6","storageBucket":"proyectoasix-86ff1.appspot.com","apiKey":"AIzaSyDxcDL3rgUDHr-lMSg1QMfBnw-ze7qDxeU","authDomain":"proyectoasix-86ff1.firebaseapp.com","messagingSenderId":"1029543546243","measurementId":"G-1ZEZ4BNB22"})),
        //provideFirestore(() => getFirestore())
    ]
})
export class AppModule { }
