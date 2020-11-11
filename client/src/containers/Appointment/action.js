import { getBarbers,getTimeAppointment } from './services';
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

export const fetchTimeAppointment = (date, barberId) =>  async (dispatch)=>{
  try {
    const res = await getTimeAppointment(date, barberId);
    if (res.success) {
      dispatch({ type: constants.FETCH_TIME_APPOINTMENT, payload: res.data });
    }
  } catch (error) {
    console.log(error);
  }
}