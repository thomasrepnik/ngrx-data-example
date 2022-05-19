import {Injectable} from '@angular/core';
import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from '@ngrx/data';
import {Coffee} from './coffee';

@Injectable({
    providedIn: 'root'
})
export class CoffeeEntityService extends EntityCollectionServiceBase<Coffee> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Coffee', serviceElementsFactory);
    }


}
