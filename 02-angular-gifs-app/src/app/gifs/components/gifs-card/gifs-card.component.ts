import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrls: ['./gifs-card.component.css']
})
export class GifsCardComponent implements OnInit {
  ngOnInit(): void {
    if(!this.gif) throw new Error("La propiedad Gif es requerida")
  }

  @Input()
  public gif!: Gif;


}
