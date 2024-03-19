import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-Table',
  templateUrl: './countryTable.component.html',
  styles: [
    `
      img {
        width: 25px;
      }
    `,
  ],
})

export class CountryTableComponent {
  @Input()
  public countries: Country[] = [];
}
