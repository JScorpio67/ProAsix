import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './tarjetas.component.html',
  styleUrl: './tarjetas.component.css'
})
export class TarjetasComponent {

  @Input() items:any [] = [];

    constructor(private router:Router){ }
    
    verArtista(item:any){
      let artistaId;

      //el type es para diferenciar si es artista o es album
      if (item.type==='artist') {
        artistaId = item.id
      } else {
        artistaId = item.artists[0].id
      }
      //reedireccion a la pagina del artista
      this.router.navigate([`/artist`, artistaId])
    }


}
