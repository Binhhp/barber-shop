import * as constants from './constants';

const initialState = {
  services: [],
  history: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.FETCH_SERVICES:
      return { ...state, services: payload };
    case constants.HISTORY_APPOINTMENT:
      return { ...state, history: payload };
    default:
      return state;
  }
};
