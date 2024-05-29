import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'

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
  constructor(){}
  ngOnInit(): void {}

  
}
