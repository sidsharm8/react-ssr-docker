import React from "react";
import { connect } from "react-redux";
import FilterPanel from "../../components/filter-panel/filter-panel.component";
import SelectedFilters from "../../components/selected-filters/selected-filters.component";
import SearchByName from "../../components/search-by-name/search-by-name.component";
import CharacterList from "../../components/character-list/character-list.component";
import Sort from "../../components/sort/sort.component";
import RequireAuth  from "../../components/require-auth/requireAuth.component";
import fetchCharacters from "../../redux/characters-list/characters.actions";

import { CharactersPageContainer } from "./characterspage.styles";

class CharactersPage extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    const { fetchData, list } = this.props;
    if(!list.length) fetchData();
  }

  render(){
    const { loading } = this.props;
    return (
      <CharactersPageContainer>
        <section className="characters-filter-panel">
          <FilterPanel />
        </section>
        <section className="characters-selected-filters-list">
          <SelectedFilters />
          <div className="characters-search-sort">
            <SearchByName />
            <Sort />
          </div>

          <CharacterList isLoading={loading} />
        </section>
      </CharactersPageContainer>
    );
  }
}
const loadData = ({dispatch }) => {
  return dispatch(fetchCharacters());
}
const mapStateToProps = ({  characters: { list, loading} }) => ({ list, loading });
const mapDispatchToProps =  (dispatch) => ({
  fetchData : () => dispatch(fetchCharacters())
})
export default {component: connect(mapStateToProps, mapDispatchToProps)(RequireAuth(CharactersPage)), loadData};
