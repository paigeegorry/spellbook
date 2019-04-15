import { FETCH_SPELLS } from '../actions/spells';

const initialState = {
  spells: []
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_SPELLS: 
      return { ...state, spells: payload };
    default:
      return state;
  }
}
