import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListDbzComponent } from './components/listDbz/listDbz.component';
import { AddCharacterComponent } from './components/addCharacter/addCharacter.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ 
    MainPageComponent,
    ListDbzComponent,
    AddCharacterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    MainPageComponent,
  ]
})
export class DbzModule { }
