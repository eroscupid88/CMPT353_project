import { combineReducers } from 'redux'
import coreuiReducer from './coreuiReducer'
import errorReducer from './errorReducer'
import authReducer from './authReducer'
import profileReducer from './profileReducer'
import companyReducer from './companyReducer'
import teamReducer from './teamReducer'
export default combineReducers({
  coreui: coreuiReducer,
  errors: errorReducer,
  auth: authReducer,
  profile: profileReducer,
  company: companyReducer,
  team: teamReducer,
})
