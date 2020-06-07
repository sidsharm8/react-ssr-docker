import React from "react";
import { connect } from "react-redux";
import setSortType from "../../redux/sort/sort.actions";
import { SortContainer, SortLabel } from "./sort.styles";

const Sort = ({ sortType, setSortType }) => {
  return (
    <SortContainer>
      <SortLabel>
        <select
          value={sortType}
          onChange={(event) => {
            setSortType(event.target.value);
          }}
          aria-label="Sort Preference"
        >
          <option value="">Sort By ID</option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </SortLabel>
    </SortContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setSortType: (sortType) => dispatch(setSortType(sortType)),
});

const mapStateToProps = (state) => ({
  sortType: state.sortType,
});
export default connect(mapStateToProps, mapDispatchToProps)(Sort);
