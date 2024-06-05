import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth/firebase/auth.service';
import { User } from 'firebase/auth'; 


@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  nuevoMensaje:string="";
  // usuarioLogeado:any;
  usuarioLogeado: User | null = null; // Usa el tipo User de Firebase
  // lista de mensajes
  mensajes: any = [
    {
      emisor: "JbL4WjYkWLW8e0iwd9gh4ZCOIKR2",
      texto: "hola que tal"
    },
    {
      emisor: "id",
      texto: "Todo bien y tu?"
    },
    {
      emisor: "JbL4WjYkWLW8e0iwd9gh4ZCOIKR2",
      texto: "Regular, con mucho sueño"
    },
  ]
  constructor(private authService:AuthService){}

  ngOnInit(): void{
    this.authService.getUserLogged().subscribe(usuario =>{
      this.usuarioLogeado = usuario;
    })
  }

  enviarMensaje(){
    console.log(this.nuevoMensaje);
    this.nuevoMensaje = "";
  }
}
