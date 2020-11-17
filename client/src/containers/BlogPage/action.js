import * as constants from './constants';
import { getCategory, getTag, getBlogsByPage, getBlogsById } from './services';

export const fetchTag = () => async (dispatch) => {
  try {
    const res = await getTag();
    if (res.success) {
      dispatch({ type: constants.FETCH_TAG, payload: res.data })
<<<<<<< HEAD

=======
>>>>>>> c579777f6dfcd84e67487acf5128a783b44d3e52
    }
  } catch (error) {
    console.log(error)
  }
}

export const fetchCategory = () => async (dispatch) => {
  try {
    const res = await getCategory();
    if (res.success) {
      dispatch({ type: constants.FETCH_CATEGORY, payload: res.data })
    }
  } catch (error) {
    console.log(error)
  }
}

export const fetchBlogs = (page, cateId, tagId, key) => async (dispatch) => {
  try {
    const res = await getBlogsByPage(page, cateId, tagId, key);
    if (res.success) {
      dispatch({ type: constants.FETCH_BLOGS, payload: res.data.data })
    }
  } catch (error) {
    console.log(error)
  }
}

export const fetchBlogById = (id) => async (dispatch) => {
  try {
    const res = await getBlogsById(id);
    if (res.success) {
      dispatch({ type: constants.FETCH_BLOGS_BY_ID, payload: res.data[0] })
    }
  } catch (error) {
    console.log(error)
  }
} 