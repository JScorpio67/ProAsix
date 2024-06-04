import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login/login.service';
import { SignService } from 'src/app/services/auth/sign/sign.service';
// import { signupForm } from 'src/app/auth/form-signup/'
import {AuthService, Credential} from '../../../services/auth/firebase/auth.service'
// import { AuthService } from 'src/app/services/auth/firebase/auth.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  userLoginOn:boolean=false;
  userRegister:boolean=false;
  user: any;
  // user: Credential.email;
  // const {email , password} = this.credencial.email

  constructor(
    private serviciodeLogin:LoginService, 
    private serviciodeSign: SignService,
    private authSrv: AuthService,
  ) { }
  ngOnDestroy(): void {
    this.serviciodeLogin.currentUserLoginOn.unsubscribe();
    //this.serviciodeSign.currentUserLoginOn.unsubscribe();
  }

  ngOnInit(): void {
    this.serviciodeLogin.currentUserLoginOn.subscribe(
      {
        next:(userLoginOn) => {
          this.userLoginOn=userLoginOn;
        }
      }
    )

    //this.serviciodeSign.
  }
  

  logOut(): void{

  }
}
