import { Component } from '@angular/core';


@Component({
    selector: 'app-counter',
    template: `

        <h3>Counter: {{ counter }}</h3>
        <button (click)="increaseBy(counter)">+1</button>
        <button (click)="reset()">Reset</button>
        <button (click)="decreaseBy(counter)" >-1</button>
   
    `,
})

export class CounterComponent{

   
    public counter: number = 10;
  
  
     public increaseBy(value: number):void{
        this.counter +=1;
    }
  
    public decreaseBy(value: number):void{
      this.counter -=1;
  }
  
  public reset(){
    this.counter = 10;
  }
}