import api from '../../api/axiosClient';
export const postContact = async (body) => {
  const res = await api.post('contacts', body);
  return res;
}