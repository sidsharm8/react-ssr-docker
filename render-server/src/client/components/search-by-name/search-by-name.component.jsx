import React from "react";
//import "./search-by-name.styles.scss";
import { connect } from "react-redux";
import setSearchText from "../../redux/search-text/search-text.actions";
import { SearchContainer, SearchLabel } from "./search-by-name.styles";

const SearchByName = ({ setSearchText }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    setSearchText(value);
  };
  return (
    <SearchContainer>
      <SearchLabel>Search by Name</SearchLabel>
      <input type="text" onChange={handleChange} />
    </SearchContainer>
  );
};

const mapDispactchToProps = (dispatch) => ({
  setSearchText: (search) => dispatch(setSearchText(search)),
});

export default connect(null, mapDispactchToProps)(SearchByName);
