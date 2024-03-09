import { Component, EventEmitter, Input,Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  @Output()
  public onDeleteId: EventEmitter<number> = new EventEmitter();

  @Input()
  public CharacterList: Character[] = [{
     name: 'Trunks', power: 10
    }
  ];

  onDeleteCharacter(index: number):void{
    //TODO: emimitr el ID del personaje
    console.log({index});
    this.onDeleteId.emit(index)
  }
}
