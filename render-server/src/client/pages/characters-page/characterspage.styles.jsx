import styled from 'styled-components';

export const CharactersPageContainer = styled.div`
  text-align: center;
  @media (min-width: 1024px) {   
      display: flex;
      flex-wrap: wrap;
    .characters-filter-panel {
      width: 20%;
    }
    .characters-selected-filters-list {
      width: 80%;
    }
    .characters-search-sort{
      display:flex;
      justify-content: space-between;
    }
  }

`;
