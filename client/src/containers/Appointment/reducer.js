import * as constants from './constants';
const initialState = {
  barbers: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.FETCH_BARBERS:
      return { ...state, barbers: payload };

    default:
      return state;
  }
};
