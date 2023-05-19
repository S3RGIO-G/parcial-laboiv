import { Component, Input, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pizza } from 'src/app/classes/pizza';
import { PizzaService } from 'src/app/services/pizza.service';
import { PizzaModificacionComponent } from '../pizza-modificacion/pizza-modificacion.component';

@Component({
  selector: 'app-pizza-listado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pizza-listado.component.html',
  styleUrls: ['./pizza-listado.component.scss']
})
export class PizzaListadoComponent implements OnInit{
  @Input() pizzas: Pizza[] = [];
  @Input() showTable: boolean  = true;
  @Output() selectPizzaEvent = new EventEmitter<Pizza>();

  constructor(private pizzaService : PizzaService) {
    
  }
  ngOnInit(): void {
  this.pizzaService.getPizzas().subscribe(res=>{
    this.pizzas = res;
  })
  }
  selectPizza(id: string){
    this.pizzas.forEach((element) => {
      if (element.id === id) this.selectPizzaEvent.emit(element);
    });
  }


}
