import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaListadoComponent } from 'src/app/components/pizza-listado/pizza-listado.component';
import { Pizza } from 'src/app/classes/pizza';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { PizzaAltaComponent } from 'src/app/components/pizza-alta/pizza-alta.component';
import { PizzaModificacionComponent } from 'src/app/components/pizza-modificacion/pizza-modificacion.component';

@Component({
  selector: 'app-pizza-abm',
  standalone: true,
  imports: [
    CommonModule,
    PizzaListadoComponent,
    NavbarComponent,
    PizzaAltaComponent,
    PizzaModificacionComponent
  ],
  templateUrl: './pizza-abm.component.html',
  styleUrls: ['./pizza-abm.component.scss'],
})
export class PizzaAbmComponent implements OnInit {
  user!: any;
  selected!: Pizza;
  loading = false;
  ngOnInit(): void {
    this.cargarUsuario();
  }

  selectedPizza(e: any) {
    this.selected = e;
  }

  pizzaCreada(e: Pizza) {
    console.log(e);
  }

  cargarUsuario() {
    let user = localStorage.getItem('user');
    if (user !== null) {
      this.user = JSON.parse(user);
    }
  }
}
