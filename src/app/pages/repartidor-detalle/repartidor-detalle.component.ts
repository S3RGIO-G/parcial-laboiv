import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepartidorListadoComponent } from 'src/app/components/repartidor-listado/repartidor-listado.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { DetalleCardComponent } from 'src/app/components/detalle-card/detalle-card.component';
import { DetallePaisComponent } from 'src/app/components/detalle-pais/detalle-pais.component';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';
import { Repartidor } from 'src/app/classes/repartidor';

@Component({
  selector: 'app-repartidor-detalle',
  standalone: true,
  imports: [
    CommonModule,
    RepartidorListadoComponent,
    NavbarComponent,
    DetalleCardComponent,
    DetallePaisComponent,
    SpinnerComponent,
  ],
  templateUrl: './repartidor-detalle.component.html',
  styleUrls: ['./repartidor-detalle.component.scss'],
})
export class RepartidorDetalleComponent implements OnInit{
  user!: any;
  selected!: Repartidor | null;
  loading = false;

  ngOnInit(): void {
    this.cargarUsuario();
  }

  cargarUsuario() {
    let user = localStorage.getItem('user');
    if (user !== null) {
      this.user = JSON.parse(user);
    }
  }

  selectedRepartidor(event: Repartidor) {
    this.selected = event;
  }
}
