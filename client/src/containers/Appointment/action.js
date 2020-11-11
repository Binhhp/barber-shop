import { getBarbers } from './services';
import * as constants from './constants';
export const fetchBarber = () => async (dispatch) => {
  try {
    const res = await getBarbers();
    if (res.success) {
      dispatch({ type: constants.FETCH_BARBERS, payload: res.data });
    }
  } catch (error) {
    console.log(error);
  }
};
