import api from '../../api/axiosClient';

export const getBarbers = async () => {
  const response = await api.get('barbers');
  return response;
};

export const getTimeAppointment = async (date, barberId) => {
  const response = await api.get('get-times', {
    params: {
      date: date,
      barber_id: barberId
    }
  });
  return response;
}