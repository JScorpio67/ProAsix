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
  mostrarChat = false;
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
    });
  }

  enviarMensaje(){
    if (this.nuevoMensaje=="") {
      return;
    }
    console.log(this.nuevoMensaje);
    //if para comprobar que el usuario este logeado
    if (this.usuarioLogeado){
      let mensaje={
        emisor: this.usuarioLogeado.uid,
        texto: this.nuevoMensaje
      };
      //añadimos el mensaje a la lista
      this.mensajes.push(mensaje);

      this.nuevoMensaje = "";


      setTimeout(() => {
        this.scrollToTheLastElementByClassName();
      }, 10)
      
    } else {
      console.error("Usuario no logeado")
    }
  }

  scrollToTheLastElementByClassName(){
    //obtenemos todos los mensajes
    let elements=document.getElementsByClassName('msj');
    if (elements.length > 0) {
      let ultimo = elements[elements.length - 1] as HTMLElement;
      let toppos = ultimo.offsetTop;
      let contenedor = document.getElementById('contenedorMensajes');
      if (contenedor && typeof toppos === 'number') {
        contenedor.scrollTop = toppos;
      }
    }
  }
};

