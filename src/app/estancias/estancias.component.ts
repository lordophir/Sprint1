import { Component } from '@angular/core';

@Component({
  selector: 'app-estancias',
  imports: [],
  templateUrl: './estancias.component.html',
  styleUrl: './estancias.component.css'
})
export class EstanciasComponent {
 //Definición de estancias 3 cards
 estancia1: any = {
  image: "/assets/ESTANCIA 1.png",
  title: "ADOSADO COLORIDO",
  descripcion1: "DESCANSAR Y RETIRARSE EN UNA",
  descripcion2: "CASA CON LA MEJOR COMUNIDAD",
};

estancia2: any = {
  image: "/assets/ESTANCIA 2.png",
  title: "PLAZA BONANZA",
  descripcion1: "MIRA EL OCÉANO, ESCUCHA LAS OLAS",
  descripcion2: "Y DISFRUTA DEL MAR",
};

estancia3: any = {
  image: "/assets/ESTANCIA 3.png",
  title: "SANTUARIO ANTIGUO",
  descripcion1: "ENCUENTRA LA CASA DE TUS SUEÑOS",
  descripcion2: "CERCA DEL COLEGIO Y DE TU OFICINA",
};
} //Fin de clase
