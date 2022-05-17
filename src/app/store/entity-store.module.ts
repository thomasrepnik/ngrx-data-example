import { NgModule } from '@angular/core';
import { EntityDataService } from '@ngrx/data'; // <-- import the NgRx Data data service registry

import { CoffeeDataService } from './coffee.service';

@NgModule({
    providers: [CoffeeDataService] // <-- provide the data service
})
export class EntityStoreModule {
    constructor(
        entityDataService: EntityDataService,
        coffeeDataService: CoffeeDataService,
    ) {
        entityDataService.registerService('Coffee', coffeeDataService); // <-- register it
    }
}