import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

 public deletedHeroe?: string ='' ;

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];

  deleteLastHeroe():void {
    this.deletedHeroe = this.heroNames.pop();


  }
}
