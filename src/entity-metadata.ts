import { EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
    Coffee: {
        entityDispatcherOptions: {
            optimisticAdd: false //Store wird erst upgedated nachdem das Backend OK zurückgibt und eine ID liefert!
        }
    }
};


export const entityConfig = {
    entityMetadata
};