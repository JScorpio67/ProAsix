import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login/login.service';
import { SignService } from 'src/app/services/auth/sign/sign.service';
// import { signupForm } from 'src/app/auth/form-signup/'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  userLoginOn:boolean=false;
  userRegister:boolean=false;

  constructor(private serviciodeLogin:LoginService, private serviciodeSign: SignService) { }
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
