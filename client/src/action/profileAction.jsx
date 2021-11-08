import axios from 'axios'
import {
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  GET_PROFILE,
  PROFILE_LOADING,
  SET_CURRENT_USER,
} from './types'

export const createProfile = (data, history) => (dispatch) => {
  axios
    .post('v1/profile/', data)
    .then((result) => {
      history.push('/dashboard')
    })
    .catch((error) => {
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data,
      })
    })
}
// get current profile

export const getCurrentProfile = () => (dispatch) => {
  dispatch(setProfileLoading())
  axios
    .get('v1/profile')
    .then((res) =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      }),
    )
    .catch((err) =>
      dispatch({
        type: GET_PROFILE,
        payload: {},
      }),
    )
}
// delete Profile
export const deleteAccount = () => (dispatch) => {
  if (window.confirm('Are you sure you want to delete your profile')) {
    axios
      .delete('/profile')
      .then((result) =>
        dispatch({
          type: SET_CURRENT_USER,
          payload: {},
        }),
      )
      .catch((err) =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        }),
      )
  }
}

export const getProfileByProfileUsername = (profileusername) => (dispatch) => {
  dispatch(setProfileLoading())
  axios
    .get(`/v1/profile/profileusername/${profileusername}`)
    .then((res) =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      }),
    )
    .catch((err) =>
      dispatch({
        type: GET_PROFILE,
        payload: null,
      }),
    )
}
// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING,
  }
}
// Clear Profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE,
  }
}
