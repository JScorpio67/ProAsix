import { Component, OnDestroy, OnInit } from '@angular/core';
import {AuthService, Credential} from '../../../services/auth/firebase/auth.service'
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: any;
  authSubscription!: Subscription;

  constructor(
    private authSrv: AuthService,
    private router: Router 

  ) { }

  ngOnInit(): void {
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

  reHome():void {
    if(this.user){
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/nohome']);
    }
  }
}
