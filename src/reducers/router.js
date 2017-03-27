const route = (state, action) => {
  switch (action.type) {
    case 'PUSH_ROUTE':
      return {
        name: action.name
      }
    default:
      return state
  }
}

const router = (state = [], action) => {
  switch (action.type) {
    case 'PUSH_ROUTE':
      return [
        route(undefined, action),
        ...state
      ]
    default:
      return state
  }
}

export default router
