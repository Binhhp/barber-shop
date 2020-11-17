import api from '../../api/axiosClient';

export const getServices = async () => {
  const response = await api.get('services');
  return response;
}