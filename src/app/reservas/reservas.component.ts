import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-reservas',
  imports: [FormsModule, CommonModule],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css'
})
export class ReservasComponent {
  // Declaración de número de huéspedes y noches

  guests: number = 1;
  nights: number = 1;

  // 
  basePrice: number = 1500;

  // Opciones de extras con sus precios
  extras = [{ name: 'MASCOTA', price: 250 },{ name: 'CALEFACCIÓN', price: 500 },{ name: 'RUTA DE MONTAÑA', price: 150 },{ name: 'SENDERISMO', price: 200 },{ name: 'VISTA A LA CASCADA', price: 50 }];

  SeleccionarExtras: { name: string; price: number }[] = []; //Aquí se declara el método para los extras

  get total(): number { //Permite que una propiedad se comporte como una variable
    
    const extrasTotal = this.SeleccionarExtras.reduce((sum, extra) => sum + extra.price, 0); // Esto es un arreglo
 
    const guestsTotal = (this.guests - 1) * 500; //Costo adicional por huesped

    const nightsTotal = (this.nights - 1) * 1000; // Costo adicional por noche

    return this.basePrice + extrasTotal + guestsTotal + nightsTotal; //Sumatoria total
  }

  formato(value: number): string { //Formatea el valor
    return `$${value.toFixed(2)} MXN`; //Número de decimales
  }

  incrementoHuespedes(): void { //Sumatoria de húespedes
    this.guests++;
  }

  restaHuespedes(): void { //Resta número de húespedes
    if (this.guests > 1) this.guests--;
  }

  incrementoNoches(): void { //Suma las noches
    this.nights++;
  }

  restaNoches(): void { //Resta las noches
    if (this.nights > 1) this.nights--;
  }

  extrasSeleccionados(event: Event, extra: { name: string; price: number }): void { //Actualiza los extras cuando se presiona un checkbox
    const checkbox = event.target as HTMLInputElement;

    // Compara los checkbox
    if (checkbox.checked) {
      this.SeleccionarExtras.push(extra);
    } else {
    // Sino está pulsado elimina los extras
      this.SeleccionarExtras = this.SeleccionarExtras.filter(e => e.name !== extra.name);
    }
  }
}
