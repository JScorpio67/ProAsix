import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { ArtistaComponent } from './pages/artista/artista.component';
import { NohomeComponent } from './pages/nohome/nohome.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { publicGuard } from './services/auth/guards/auth.guards';
// import { NewSignUpComponent } from 'src/app/auth/form-signup/form-signup.component'

export const routes:Routes =[
  //redireccion al inicio, si no se ha especificado la ruta
  {path:'', redirectTo:'nohome', pathMatch:'full'},
  
  //PAGINA SIN INICIAR SESION
  // {path:'inicio', component:NohomeComponent},
  {path:'nohome', component:NohomeComponent},
  
  // {
  //   path: '',
  //   canActivate:[publicGuard],
  //   loadComponent: () => import('./pages/nohome/nohome.component'),
  // },

  //RUTA NEW LOGIN-SIGNUP
  {
    path: 'auth',
    children: [
      {
        path: 'app-sign-up', //component:NewSignUpComponent
        loadComponent: () => import ('./auth/form-signup/form-signup.component'),
      },

      {
        path: 'app-log-in',
     // loadComponent: () => import ('./auth/form-login/form-login'),
        loadComponent: () => import ('./auth/form-login/form-login'),
      },

    ]
  },
  //PAGINA PARA REGISTRARSE
  {path:'signup', component:SignupComponent},
  
  //PAGINA INICIAR SESION
  {path:'login', component:LoginComponent},

  //PAGINA CON SESION INCIADA
  {path:'home', component:HomeComponent},

  //PAGINA BUSQUEDA
  {path: 'search', component: SearchComponent},
  {path: 'artist/:id', component: ArtistaComponent},
  
  //PAGINA NEW FORMULARIO
  // {path:'form-signup', component:HomeComponent},
  





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

