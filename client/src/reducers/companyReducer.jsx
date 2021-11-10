import { CREATE_COMPANY } from '../action/types'

const initialState = {
  company: null,
  loading: false,
}
export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_COMPANY:
      return action.payload
    default:
      return state
  }
}
