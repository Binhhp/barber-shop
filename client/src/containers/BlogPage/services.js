import api from '../../api/axiosClient';
export const getBlogsByPage = (page) => {
  const response = await api.get('blog', {
    params:{
      page: page
    }
  });
  return response;
}
export const getBlogDetail = (id) => {
  const response = await api.get('blog', {
    params:{
      id: id
    }
  });
  return response;
}