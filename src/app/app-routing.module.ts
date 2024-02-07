import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { ArtistaComponent } from './pages/artista/artista.component';
import { NohomeComponent } from './pages/nohome/nohome.component';
import { LoginComponent } from './pages/login/login.component';



export const routes:Routes =[
  //redireccion al inicio, si no se ha especificado la ruta
  {path:'', redirectTo:'/nohome', pathMatch:'full'},

  {path:'inicio', component:NohomeComponent},
  {path:'iniciar-sesion', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'artist/:id', component: ArtistaComponent},
  
  
  //{path: 'home', component: HomeComponent},
  
  //{path:'', pathMatch:'full', redirectTo:'home'},
  //{path:'**', pathMatch:'full', redirectTo:'home'}
]

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

