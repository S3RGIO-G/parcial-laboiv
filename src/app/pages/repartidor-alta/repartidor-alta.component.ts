import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pais } from 'src/app/classes/pais';
import { FormRepartidorComponent } from 'src/app/components/form-repartidor/form-repartidor.component';
import { TablaPaisesComponent } from 'src/app/components/tabla-paises/tabla-paises.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';

@Component({
  selector: 'app-repartidor-alta',
  standalone: true,
  imports: [
    CommonModule,
    FormRepartidorComponent,
    TablaPaisesComponent,
    NavbarComponent,
    SpinnerComponent,
  ],
  templateUrl: './repartidor-alta.component.html',
  styleUrls: ['./repartidor-alta.component.scss'],
})
export class RepartidorAltaComponent implements OnInit {
  user!: any;
  selectedCountry!: Pais;
  loading = false;
  @ViewChild('form') form!: FormRepartidorComponent;

  ngOnInit(): void {
    this.cargarUsuario();
  }
  selectCountry(e: Pais) {
    this.form.setCountry(e);
    this.selectedCountry = e;
  }

  cargarUsuario() {
    let user = localStorage.getItem('user');
    if (user !== null) {
      this.user = JSON.parse(user);
    }
  }
}
