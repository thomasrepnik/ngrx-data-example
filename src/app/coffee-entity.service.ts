
import { Injectable } from '@angular/core';
import { EntityActionOptions, EntityCollectionServiceBase, EntityCollectionServiceElementsFactory, MergeStrategy } from '@ngrx/data';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Coffee } from './coffee';

@Injectable({
    providedIn: 'root'
})
export class CoffeeEntityService extends EntityCollectionServiceBase<Coffee> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Coffee', serviceElementsFactory);
    }



}