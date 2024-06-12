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
import { ChatComponent } from './pages/chat/chat.component';
//import { FormSignupComponent } from './auth/form-signup.component'
import { ButtonProviders } from './services/auth/componentes/button-providers.component'


//FIREBASE
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { firebaseProviders } from './firebase.config';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { getAuth, provideAuth } from '@angular/fire/auth';


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
        //FormSignupComponent,
        
        
        
    ],
    providers: [
    provideAnimationsAsync()
  ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatSnackBarModule,
        NoimagePipe,
        LoadingComponent,
        LinkseguroPipe,
        CommonModule,
        ButtonProviders,
        //CONEXION FIREBASE CON PROYECTO
        //firebaseConfig antes era firebase!!!!!!!!!!
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideAuth(() => getAuth()),
        // AppComponent,
        // firebaseProviders,
        // provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        // provideAuth(() => getAuth()),

        // BrowserModule,
        // AppRoutingModule,
        // HttpClientModule,

        // ReactiveFormsModule,
        FormsModule,
        ChatComponent,


        
    ]
})
export class AppModule { }
