import * as constants from './constants'
const initialState = {
  blogs: [],
  blog: null,
  currentPage: 1,
  categories: [],
  tags: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case constants.FETCH_CATEGORY:
      return { ...state, categories: payload };
    case constants.FETCH_TAG:
      return { ...state, tags: payload };
    case constants.FETCH_BLOGS:
      return { ...state, blogs: payload };

    case constants.FETCH_BLOGS_BY_ID:
      return { ...state, blog: payload };
    default:
      return state
  }
}
