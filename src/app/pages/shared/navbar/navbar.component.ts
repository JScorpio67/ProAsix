import { Component, OnDestroy, OnInit } from '@angular/core';
// import { LoginService } from 'src/app/services/auth/login/login.service';
// import { SignService } from 'src/app/services/auth/sign/sign.service';
// import { signupForm } from 'src/app/auth/form-signup/'
import {AuthService, Credential} from '../../../services/auth/firebase/auth.service'
// import { AuthService } from 'src/app/services/auth/firebase/auth.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: any;
  authSubscription!: Subscription;
  // user: Credential.email;
  // const {email , password} = this.credencial.email

  constructor(
    // private serviciodeLogin:LoginService, 
    // private serviciodeSign: SignService,
    private authSrv: AuthService,
  ) { }

  ngOnInit(): void {
    // this.serviciodeLogin.currentUserLoginOn.subscribe(
    //   {
    //     next:(userLoginOn) => {
    //       this.userLoginOn=userLoginOn;
    //     }
    //   }
    // )

    //this.serviciodeSign.
    this.authSubscription = this.authSrv.authState$.subscribe(user => {
      this.user = user;
    });
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
  

  logOut(): void {
    this.authSrv.logOut();
  }
}
