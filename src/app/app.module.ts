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

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SearchComponent,
        NavbarComponent,
        ArtistaComponent,
        // nuevo, prueba
        TarjetasComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NoimagePipe,
        LoadingComponent,
        LinkseguroPipe
    ]
})
export class AppModule { }
