import * as constants from './constants';
const initialState = {
  barbers: null,
  gridTime: null,
  barberId: null,
  date: null,
  serviceId: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.FETCH_BARBERS:
      return { ...state, barbers: payload };
    case constants.FETCH_TIME_APPOINTMENT:
      return { ...state, gridTime: payload };
    case constants.SET_DATE_APPOINTMENT:
      return { ...state, date: payload };
    case constants.SET_BARBER_APPOINTMENT:
      return { ...state, barberId: payload };
    case constants.SET_TIME_APPOINTMENT:
      return { ...state, time: payload };
    case constants.SET_SERVICE_APPOINTMENT:
      return { ...state, serviceId: payload };
    // case constants.POST_APPOINTMENT:
    //   return { ...state, serviceId: payload };
    default:
      return state;
  }
};
