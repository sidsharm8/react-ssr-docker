import { createSelector } from "reselect";

const selectedFilters = (state) => state.selectedFilters;

export const selectedFiltersSelector = createSelector(
  [selectedFilters],
  (selectedFilters) => ({...selectedFilters})
);
