import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'add-character',
    templateUrl: 'addCharacter.component.html'
})

export class AddCharacterComponent {

    @Output()
    public OneEmitCharacter: EventEmitter<Character> = new EventEmitter()

    public character: Character = {
        id: '',
        name: '',
        power: 0,
    }

    emitCharacter():void{
        console.log(this.character);

        if ( this.character.name.length === 0) return;

        this.OneEmitCharacter.emit(this.character);

        this.character = {id: '', name:'', power:0}
    }
}