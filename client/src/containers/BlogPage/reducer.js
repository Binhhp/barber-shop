const initialState = {
  services: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case 'GET_LIST_SERVICES':
      return { ...state, ...payload }

    default:
      return state
  }
}
