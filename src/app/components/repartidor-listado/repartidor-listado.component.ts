import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Repartidor } from 'src/app/classes/repartidor';
import { RepartidorService } from 'src/app/services/repartidor.service';

@Component({
  selector: 'app-repartidor-listado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './repartidor-listado.component.html',
  styleUrls: ['./repartidor-listado.component.scss']
})
export class RepartidorListadoComponent {
  repartidores : Array<Repartidor> = [];
  @Output() selectedRepartidorEvent = new EventEmitter<Repartidor>();

  constructor(private repartidorService : RepartidorService) {
  }
  ngOnInit(): void {
    this.repartidorService.getRepartidores().subscribe(res=>{
      this.repartidores = res;
    })
  } 

  onClick(repartidor: any) {
    this.selectedRepartidorEvent.emit(repartidor);    
  }
}
