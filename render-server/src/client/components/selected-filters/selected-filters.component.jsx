import React from "react";
import { connect } from "react-redux";

import removeFilter from "../../redux/selected-filters/remove-filter.actions";
import { selectedFiltersSelector } from "../../redux/selected-filters/selected-filters.selectors";
import {
  SelectedFilterContainer,
  SelectedFilterLabel,
  SelectedFilterTitle,
  RemoveFilter,
  SelectedFiltersChild
} from "./selected-filters.styles";

const SelectedFilters = ({ filters, removeFilter }) => {
  const filterTypes = Object.keys(filters);
  return (
    <SelectedFilterContainer>
      <SelectedFilterTitle>Selected Filters</SelectedFilterTitle>
      <SelectedFiltersChild>
        {filters &&
          filterTypes.map((filterType) =>
            filters[filterType].map((filter) => (
              <SelectedFilterLabel key={filter.label}>
                {filter.label}{" "}
                <RemoveFilter
                  onClick={() => {
                    removeFilter({ filterType, value: filter });
                  }}
                ></RemoveFilter>
              </SelectedFilterLabel>
            ))
          )}
      </SelectedFiltersChild>
    </SelectedFilterContainer>
  );
};

const mapStateToProps = (state) => ({
  filters: selectedFiltersSelector(state),
});
const mapDispatchToProps = (dispatch) => ({
  removeFilter: (filter) => dispatch(removeFilter({ ...filter })),
});
export default connect(mapStateToProps, mapDispatchToProps)(SelectedFilters);
