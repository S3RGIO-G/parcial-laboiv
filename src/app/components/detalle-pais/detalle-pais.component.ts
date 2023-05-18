import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Repartidor } from 'src/app/classes/repartidor';

@Component({
  selector: 'app-detalle-pais',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.scss']
})
export class DetallePaisComponent {
  @Input() repartidor !: Repartidor | null;
}
