import { combineReducers } from "redux";

import selectedFiltersReducer from "./selected-filters/selected-filters.reducer";
import searchTextReducer from "./search-text/search-text.reducer";
import sortReducer from "./sort/sort.reducer";
import charactersReducer from "./characters-list/characters.reducer";
import userReducer from "./user/user.reducer";

const rootReducer = combineReducers({
  selectedFilters: selectedFiltersReducer,
  searchText: searchTextReducer,
  sortType: sortReducer,
  characters: charactersReducer,
  auth: userReducer
});

export default rootReducer;
