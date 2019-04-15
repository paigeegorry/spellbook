import { FETCH_SPELLS, UPDATE_SEARCH_TERM, UPDATE_FILTER_VALUE } from '../actions/spells';

const initialState = {
  spells: [],
  searchTerm: '',
  spellType: ''
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_SPELLS: 
      return { ...state, spells: payload };
    case UPDATE_SEARCH_TERM:
      return { ...state, searchTerm: payload };
    case UPDATE_FILTER_VALUE:
      return { ...state, spellType: payload };
    default:
      return state;
  }
}
