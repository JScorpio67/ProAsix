import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { AuthService } from 'src/app/services/auth/firebase/auth.service';

@Component({
  selector: 'app-nohome',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule   
  ],
  templateUrl: './nohome.component.html',
  styleUrl: './nohome.component.css'
})
export class NohomeComponent implements OnInit {
  private authservice = inject(AuthService)

  async logOut():Promise <void> {
    try {
    await  this.authservice.logOut()

    } catch (error) {
      console.log(error)
    }


  }

  constructor(){}
  ngOnInit(): void {}

  
}
