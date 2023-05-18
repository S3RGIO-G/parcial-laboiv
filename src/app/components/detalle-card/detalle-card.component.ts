import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Repartidor } from 'src/app/classes/repartidor';

@Component({
  selector: 'app-detalle-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-card.component.html',
  styleUrls: ['./detalle-card.component.scss']
})
export class DetalleCardComponent {
  @Input() repartidor !: Repartidor | null;
  @Output() cleanRepartidorEvent = new EventEmitter<null>;

  cleanRepartidor(){
    this.cleanRepartidorEvent.emit(null);
  }
}
