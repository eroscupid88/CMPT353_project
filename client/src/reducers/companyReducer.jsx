import {CREATE_COMPANY, DELETE_COMPANY, GET_COMPANIES, GET_CURRENT_COMPANY, LOADING_COMPANY} from '../action/types'

const initialState = {
  company: null,
  loading: false,
  companies: null
}
export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_COMPANY:
      return {...state,company:action.payload,loading:false}
    case GET_CURRENT_COMPANY:
      return{...state,company: action.payload,loading:false}
    case GET_COMPANIES:
      return{...state,loading:false,companies: action.payload}
    case LOADING_COMPANY:
      return { loading: true }
    case DELETE_COMPANY:
      return {...state,loading: false,company: null}
    default:
      return state
  }
}
