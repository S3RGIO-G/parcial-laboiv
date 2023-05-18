import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from 'src/app/services/country.service';
import { Pais } from 'src/app/classes/pais';

@Component({
  selector: 'app-tabla-paises',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css'],
})
export class TablaPaisesComponent implements OnInit {
  countries: Array<Pais> = [];
  @Output() selectCountryEvent = new EventEmitter<Pais>();
  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.getSpanishCountries().then((res) => {

      res.forEach((item: any) => {
        const country = new Pais(item.name.nativeName.spa.common, item.flags.png);
        this.countries.push(country)
      });
    });
  }

  onClick(country: any) {
    this.selectCountryEvent.emit(country);    
  }

}
