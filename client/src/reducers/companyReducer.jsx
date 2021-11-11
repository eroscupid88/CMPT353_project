import {CREATE_COMPANY, GET_CURRENT_COMPANY, LOADING_COMPANY} from '../action/types'

const initialState = {
  company: null,
  loading: false,
}
export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_COMPANY:
      return {...state,company:action.payload,loading:false}
    case GET_CURRENT_COMPANY:
      return{...state,company: action.payload,loading:false}
    case LOADING_COMPANY:
      return { loading: true }
    default:
      return state
  }
}
