const representative = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        name: action.text
      }
    default:
      return state
  }
}

const representatives = (state = [], action) => {
  switch (action.type) {
    case 'ADD_REP':
      return [
        ...state,
        todo(undefined, action)
      ]
    default:
      return state
  }
}

export default representatives
