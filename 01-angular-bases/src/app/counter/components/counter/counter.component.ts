import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Numero de visitas: {{ counter }}</h3>

    <button (click)="changeValue(1)">+1</button>
    <button (click)="changeValue(-1)">-1</button>
    <button (click)="reset()">Reset Value</button>

    <hr />
  `,
})
export class CounterComponent {
  public counter: number = 10;

  changeValue(value: number): void {
    if (this.counter === 0) {
      return;
    }
    this.counter += value;
  }

  reset(): void {
    this.counter = 10;
  }
}
