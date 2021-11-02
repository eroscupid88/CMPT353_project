import { combineReducers } from 'redux'
import coreuiReducer from './coreuiReducer'
export default combineReducers({
  coreui: coreuiReducer,
})
