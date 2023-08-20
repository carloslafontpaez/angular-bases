import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';


  console.log(uuid());

@Injectable({
    providedIn: 'root'
})

export class dbzService {

    public characterw: Character []= [
        {
            id: uuid(),
            name: 'Krillin',
            power: 1000,
        },
        {
            id: uuid(),
            name: 'Goku',
            power: 9500,
        },
        {
            id: uuid(),
            name: 'Vegeta',
            power: 10000,
        }
    ];

    addCharacter( character:Character ):void{

        const newCharacter: Character = {  ...character, id: uuid()}

        this.characterw.push(newCharacter);
    }

    // deleteId( index:number ){
    //     this.characterw.splice(index, 1);

    deleteCharacterById( id:string ){
        this.characterw = this.characterw.filter( Character => Character.id != id)

    }
}