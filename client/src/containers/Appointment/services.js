import api from '../../api/axiosClient';

export const getBarbers = async () => {
  const response = await api.get('barbers');
  return response;
};
