import { Component, OnDestroy, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import Swal from 'sweetalert2';
import { LoadingComponent } from '../shared/loading/loading.component';
import { LoginService } from 'src/app/services/auth/login/login.service';
import { User } from 'src/app/services/auth/user';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  // nueva constante
  nuevasCanciones : any[]=[];
  
  loading?:boolean;
  logMsg?:boolean;
  error?:boolean;

  userLoginOn:boolean=false;
  userData?:User;

  constructor(private spotify:SpotifyService, private serviciodeLogin:LoginService) { 

    // this.spotify.getNewReleases().subscribe(res=>{
    //   this.nuevasCanciones = res
    // })
    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases().subscribe({
      next:(res)=>{
        this.nuevasCanciones=res;
        this.loading=false;
      },
      error:err=>{
        this.loading = false;
        this.error = true;

        Swal.fire ({
          icon:'error',
          title:'ERROR',
          text:err.error.error.message,
          allowOutsideClick:false
        })
      }
    })

  }

  ngOnDestroy(): void {
    this.serviciodeLogin.currentUserData.unsubscribe()
  }


  ngOnInit(): void{
    this.serviciodeLogin.currentUserLoginOn.subscribe({
      next:(userLoginOn) => {
        this.userLoginOn=userLoginOn;
      }
    });

    this.serviciodeLogin.currentUserData.subscribe({
      next:(userData) => {
        this.userData=this.userData;
      }
    })

  }

 

}
