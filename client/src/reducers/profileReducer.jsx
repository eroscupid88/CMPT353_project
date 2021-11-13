import {CLEAR_CURRENT_PROFILE, GET_PROFILE, PROFILE_LOADING} from '../action/types'
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
    case CLEAR_CURRENT_PROFILE:
      return {
        profile: null,
        loading: false
      }
    default:
      return state
  }
}
