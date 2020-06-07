import React from "react";
//import "./filter-panel.styles.scss";
import FilterSection from "../filter-section/filter-section.component";
import { FilterPanelContainer, FilterPanelHeader } from "./filter-panel.styles";
import { OTHER_ORIGINS, OTHER_SPECIES } from "./data";

const filters = [
  {
    title: "species",
    list: [{
      value: "Human",
      label: "Human"
    },{
      value: "Mytholog",
      label: "Mytholog"
    },{
      value: OTHER_SPECIES,
      label: "Other Species..."
    }]
  },
  {
    title: "gender",
    list: [{
      value: "Male",
      label: "Male"
    },{
      value: "Female",
      label: "Female"
    }],
  },
  {
    title: "origin",
    list: [{
      value: "unknown",
      label: "Unknown"
    },{
      value: "Post-Apocalyptic Earth",
      label: "Post-Apocalyptic Earth"
    },{
      value: OTHER_ORIGINS,
      label: "Other Origins..."
    }],
  },
];
const FilterPanel = () => {
  return (
    <FilterPanelContainer>
      <FilterPanelHeader>
        <h2>Filters</h2>
      </FilterPanelHeader>
      {filters.map(({ title, list }) => (
        <FilterSection key={title} title={title} list={list} />
      ))}
    </FilterPanelContainer>
  );
};

export default FilterPanel;
