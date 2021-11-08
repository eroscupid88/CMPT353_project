import { GET_PROFILE, PROFILE_LOADING } from '../action/types'
const initialState = {
  profile: null,
  loading: false,
}
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE:
      return { ...state, profile: action.payload, loading: false }
    case PROFILE_LOADING:
      return { loading: true }
    default:
      return state
  }
}
