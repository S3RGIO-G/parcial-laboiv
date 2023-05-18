import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CountryService {

  URL_API = 'https://restcountries.com/v3.1';

  constructor() { }

  getSpanishCountries(){
    const data = fetch(`${this.URL_API}/lang/spanish?fields=name,flags`).then(data => data.json());
    return data;
  }


}
