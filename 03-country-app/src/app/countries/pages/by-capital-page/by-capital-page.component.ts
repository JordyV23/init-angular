import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [],
})
export class ByCapitalPageComponent {
  public countries: Country[] = [];

  constructor(private contriesService: CountriesService) {}

  searchByCapital(term: string): void {
    // siempre hay que suscribirse a un observable
    // sin eso nunca se van a reflejar cambios
    this.contriesService.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
