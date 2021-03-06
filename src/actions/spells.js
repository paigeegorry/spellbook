import { createAction } from 'promise-middleware-redux';
import { getSpellInfo } from '../services/potterApi';

export const [
  fetchSpells,
  FETCH_SPELLS,
  LOAD_SPELLS_START,
  LOAD_SPELLS_END
] = createAction('FETCH_POSTS', getSpellInfo);

export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export const updateSearchTerm = searchTerm => ({
  type: UPDATE_SEARCH_TERM,
  payload: searchTerm
});

export const UPDATE_FILTER_VALUE = 'UPDATE_FILTER_VALUE';
export const updateFilterValue = filterValue => ({
  type: UPDATE_FILTER_VALUE,
  payload: filterValue
});
