import { Component, EventEmitter, Input,Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  @Input()
  public CharacterList: Character[] = [{
     name: 'Trunks', power: 10
    }
  ];

  onDeleteCharacter(id: string):void{
    this.onDeleteId.emit(id)
  }
}
