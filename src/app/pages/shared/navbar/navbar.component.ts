import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userLoginOn:boolean=false;

  constructor(private serviciodeLogin:LoginService) { }

  ngOnInit(): void {
    this.serviciodeLogin.currentUserLoginOn.subscribe(
      {
        next:(userLoginOn) => {
          this.userLoginOn=userLoginOn;
        }
      }
    )
  }

}
