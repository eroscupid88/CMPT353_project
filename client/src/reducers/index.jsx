import { combineReducers } from 'redux'
import coreuiReducer from './coreuiReducer'
import errorReducer from './errorReducer'
import authReducer from './authReducer'
export default combineReducers({
  coreui: coreuiReducer,
  errors: errorReducer,
  auth: authReducer,
})
