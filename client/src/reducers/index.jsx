import { combineReducers } from 'redux'
import coreuiReducer from './coreuiReducer'
import errorReducer from './errorReducer'
export default combineReducers({
  coreui: coreuiReducer,
  errors: errorReducer,
})
