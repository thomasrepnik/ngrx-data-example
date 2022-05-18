import { EntitySelectorsFactory } from "@ngrx/data";
import { createSelector } from "@ngrx/store";
import { Coffee } from "../coffee";

export const coffeeSelectors = new EntitySelectorsFactory().create<Coffee>('Coffee');

export const selectCoffeeByLowId = (threshold: number) => createSelector(
    coffeeSelectors.selectEntities,
    (data) => data.filter(c => c.id < threshold)
);