import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './listDbz.component.html',
  styleUrls: ['./listDbz.component.css']
})
export class ListDbzComponent {

 

  @Input()
  public characterList: Character []=[{
    id: uuid(),
    name: 'Trunks',
    power: 10,
  }];

  @Output()
    public onDelete: EventEmitter<string> = new EventEmitter()

  onDeleteCharacter( id:string ):void{
    this.onDelete.emit(id);
  }

}
