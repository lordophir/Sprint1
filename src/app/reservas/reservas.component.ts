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
extras = [
{ name: 'MASCOTA', price: 250 },
{ name: 'CALEFACCIÓN', price: 500 },
{ name: 'RUTA DE MONTAÑA', price: 150 },
{ name: 'SENDERISMO', price: 200 },
{ name: 'VISTA A LA CASCADA', price: 50 }
];

 // Lista de extras seleccionados por el usuario
 selectedExtras: { name: string; price: number }[] = [];

 // Getter para calcular el total dinámicamente
 get total(): number {
  // Suma los precios de los extras seleccionados
  const extrasTotal = this.selectedExtras.reduce((sum, extra) => sum + extra.price, 0);

  // Calcula el costo adicional por huéspedes 
  const guestsTotal = (this.guests - 1) * 500;

  // Calcula el costo adicional por noches
  const nightsTotal = (this.nights - 1) * 1000;

  // Retorna la suma del precio base, extras y costos adicionales
  return this.basePrice + extrasTotal + guestsTotal + nightsTotal;
}

// Formatea un valor numérico como moneda (MXN)
  formatCurrency(value: number): string {
    return `$${value.toFixed(2)} MXN`;
  }

  // Incrementa el número de huéspedes
  increaseGuests(): void {
    this.guests++;
  }

  // Decrementa el número de huéspedes (mínimo 1)
  decreaseGuests(): void {
    if (this.guests > 1) this.guests--;
  }

  // Incrementa el número de noches
  increaseNights(): void {
    this.nights++;
  }

  // Decrementa el número de noches (mínimo 1)
  decreaseNights(): void {
    if (this.nights > 1) this.nights--;
  }

  // Actualiza la lista de extras seleccionados al interactuar con los checkboxes
  updateSelectedExtras(event: Event, extra: { name: string; price: number }): void {
    const checkbox = event.target as HTMLInputElement;

    // Si el checkbox está marcado, añade el extra a la lista de seleccionados
    if (checkbox.checked) {
      this.selectedExtras.push(extra);
    } else {
      // Si el checkbox está desmarcado, elimina el extra de la lista de seleccionados
      this.selectedExtras = this.selectedExtras.filter(e => e.name !== extra.name);
    }
  }
}
