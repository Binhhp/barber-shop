import api from '../../api/axiosClient';
export const getBlogsByPage = async (page, cateId, tagId, key) => {
  const response = await api.get('article', {
    params: {
      page: page,
      cateId: cateId,
      tagId: tagId,
      key: key
    }
  });
  return response;
}

export const getCommentsByBlogId = async (id) => {
  const response = await api.get(`/comments/${id}`);
  return response;
}

export const getBlogsById = async (id) => {
  const response = await api.get(`/article/${id}`);
  return response;
}

export const getBlogDetail = async (id) => {
  const response = await api.get('blog', {
    params: {
      id: id
    }
  });
  return response;
}


export const getCategory = async () => {
  const response = await api.get('cates');
  return response;
}


export const getTag = async () => {
  const response = await api.get('tags');
  return response;
}