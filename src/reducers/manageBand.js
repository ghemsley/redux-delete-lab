import uuid from 'uuid'

const manageBand = (state = { bands: [] }, action) => {
  switch (action.type) {
    case 'ADD_BAND':
      return {
        ...state,
        bands: [...state.bands, { name: action.payload, id: uuid() }]
      }
    case 'DELETE_BAND':
      return {
        ...state,
        bands: state.bands.filter((band) => band.id !== action.id)
      }
    default:
      return state
  }
}

export default manageBand
