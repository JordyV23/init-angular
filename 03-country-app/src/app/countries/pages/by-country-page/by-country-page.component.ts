import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [],
})
export class ByCountryPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private contriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.contriesService.cacheStore.byCountries.countries;
    this.initialValue = this.contriesService.cacheStore.byCountries.term;
  }

  searchByCountry(term: string) {
    this.isLoading = true;

    this.contriesService.searchCountry(term).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
