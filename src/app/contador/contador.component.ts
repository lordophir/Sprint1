import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
//Definición de imagen en galeria   
imagen:string="/assets/Casaportada.webp";
    colocarImagen(num:number ):void {

      switch(num){
        case 1: this.imagen="/assets/Casaportada.webp"; break;
        case 2: this.imagen="/assets/sala.webp"; break;
        case 3: this.imagen="/assets/recámara.webp"; break;
      }
    }
}
