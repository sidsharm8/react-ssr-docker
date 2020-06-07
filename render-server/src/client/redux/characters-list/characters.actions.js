const setCharacters = (characters) => ({
  type : "SET_CHARACTERS",
  payload: characters
});

const fetchCharactersStart = () => ({
  type : "FETCH_CHARACTERS_START",
});

export const setNextPage = (nextPage) => ({
  type : "SET_NEXT_PAGE",
  payload: nextPage
});

const fetchCharacters = (characterList = []) => async (dispatch, getState, api) => {
	const { characters : { nextPage } } = getState();
	if(nextPage) {      
      const { selectedFilters, searchText, sortType } = getState();
		  const res = await api.post(`/character?page=${nextPage}`, { selectedFilters, searchText, sortType });
		  dispatch(setCharacters(res.data.results || []));
	}

}

export default fetchCharacters;
