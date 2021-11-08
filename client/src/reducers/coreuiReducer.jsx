import { SET } from '../action/types'

const initialState = {
  sidebarShow: true,
  sidebarUnfoldable: false,
}
export default function (state = initialState, { type, ...rest }) {
  switch (type) {
    case SET:
      return { ...state, ...rest }
    default:
      return state
  }
}
