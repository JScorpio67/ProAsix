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

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SearchComponent,
        NavbarComponent,
        ArtistaComponent,
        LoginComponent,
        // nuevo, prueba
        TarjetasComponent,
        SignupComponent 
    ],
    providers: [],
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
        FormsModule
    ]
})
export class AppModule { }
