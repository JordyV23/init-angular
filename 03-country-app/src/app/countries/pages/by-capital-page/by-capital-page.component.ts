import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [],
})
export class ByCapitalPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private contriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.contriesService.cacheStore.byCapital.countries
    this.initialValue = this.contriesService.cacheStore.byCapital.term
  }

  searchByCapital(term: string): void {

    this.isLoading = true;
    // siempre hay que suscribirse a un observable
    // sin eso nunca se van a reflejar cambios
    this.contriesService.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
