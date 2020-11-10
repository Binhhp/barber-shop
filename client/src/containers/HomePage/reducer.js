import * as constants from './constants';

const initialState = {
  services: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.FETCH_SERVICES:
      return { ...state, services: payload };

    default:
      return state;
  }
};
