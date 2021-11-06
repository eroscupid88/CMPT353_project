import axios from 'axios'
import { GET_ERRORS, SET_CURRENT_USER } from './types'
import jwt_decode from 'jwt-decode'
import setAuthToken from '../utilities/setAuthToken'
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post('/v1/user/register', userData)
    .then((result) => {
      history.push('/login')
      console.log(result)
    })
    .catch((error) => {
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data,
      })
    })
}

/**
 * dispatch function connect redux store to Login Components, fetch data and send it to component
 * @param {} userData
 * @returns
 */
export const loginUser = (userData) => (dispatch) => {
  axios
    .post('/v1/user/login', userData)
    .then((result) => {
      const { token } = result.data
      localStorage.setItem('jwtToken', token)
      // set token to auth header
      setAuthToken(token)
      const decoded = jwt_decode(token)
      dispatch(setCurrentUser(decoded))
    })
    .catch((error) => {
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data,
      })
    })
}

export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  }
}
// log user out
export const logoutUser = () => (dispatch) => {
  // remove token from local storage
  localStorage.removeItem('jwtToken')
  // remove auth header for future requests
  setAuthToken(false)
  // set current user too { } which will set is Authenticated to false
  dispatch(setCurrentUser({}))
}
