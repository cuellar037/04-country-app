import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  constructor(private countriesService:CountriesService){}

  public countries:Country[] = [];
  public isLoading:boolean = false;

  searchByCountry(term:string):void{
    this.isLoading = true;
    this.countriesService.searchCountry(term).subscribe( country =>{
      this.countries = country;
      this.isLoading = false;
    })
  }
}
