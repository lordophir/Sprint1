import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { EstanciasComponent } from './estancias/estancias.component';
import { ReservasComponent } from './reservas/reservas.component';
import { PrefooterComponent } from './prefooter/prefooter.component';
import { FooterComponent } from './footer/footer.component';
import { ContadorComponent } from './contador/contador.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent,ReservasComponent,EstanciasComponent,PrefooterComponent,FooterComponent,ContadorComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sprint1';
}
