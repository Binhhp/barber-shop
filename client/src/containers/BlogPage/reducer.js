const initialState = {
  blogs: [],
  blog: null,
  currentPage: 1,
  categories: [],
  tags:[]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case 'GET_LIST_SERVICES':
      return { ...state, ...payload }

    default:
      return state
  }
}
