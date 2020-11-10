import { getServices } from './service';
import * as constants from './constants'

//get list service
export const fetchServices = () => async (dispatch) => {
  try {
    const res = await getServices();
    if (res.success) {
      dispatch({ type: constants.FETCH_SERVICES, payload: res.data })
    }
  } catch (error) {
    console.log(error)
  }
}
