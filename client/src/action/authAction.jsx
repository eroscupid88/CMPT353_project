import axios from 'axios'
import { GET_ERRORS, SET_CURRENT_USER } from './types'
import jwt_decode from 'jwt-decode'
import setAuthToken from '../utilities/setAuthToken'
export const registerUser = (userData, history) => (dispatch) => {}

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
