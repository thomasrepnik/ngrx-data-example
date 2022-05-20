import { EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
    Coffee: {
        entityDispatcherOptions: {
            optimisticAdd: true //Store wird erst upgedated nachdem das Backend OK zurückgibt und eine ID liefert!
        }
    }
};


export const entityConfig = {
    entityMetadata
};