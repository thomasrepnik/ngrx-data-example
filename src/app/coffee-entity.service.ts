import { Injectable } from '@angular/core';
import { EntityAction, EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { tap } from 'rxjs/operators';
import { Coffee } from './coffee';

@Injectable({
    providedIn: 'root'
})
export class CoffeeEntityService extends EntityCollectionServiceBase<Coffee> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Coffee', serviceElementsFactory);

        this.errors$
            .pipe(
                tap((action: EntityAction) => console.log(action))
            )
    }




}
