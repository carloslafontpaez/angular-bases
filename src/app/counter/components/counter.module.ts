import { ExternalReference } from '@angular/compiler';
import { NgModule } from "@angular/core";
import { CounterComponent } from './counter/counter.component';


@NgModule({
    declarations:[
        CounterComponent,
    ],
    exports: [
        CounterComponent,
    ]
})
export class CounterModule{

}