import { FETCH_SPELLS, UPDATE_SEARCH_TERM } from '../actions/spells';

const initialState = {
  spells: [],
  searchTerm: ''
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_SPELLS: 
      return { ...state, spells: payload };
    case UPDATE_SEARCH_TERM:
      return { ...state, searchTerm: payload };
    default:
      return state;
  }
}
