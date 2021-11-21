import axios from 'axios'
import {
  REQUESTINGS_LOADING,
  GET_ERRORS,
  GET_REQUESTINGS_SUCESS
} from './types'

export const createStaffRequest = (data) => (dispatch) => {
  axios
    .post('/v1/requesting',data)
    .then(res => {
      console.log({aaa :res.data})
      // res.data
    })
    .catch((errors) =>
      dispatch({
        type: GET_ERRORS,
        payload: errors.response.data
      }))
}

export const getAllRequests = () => (dispatch) => {
  dispatch(requestingLoading())
  axios.get('/v1/requesting').then(
    requests => dispatch({
      type: GET_REQUESTINGS_SUCESS,
      payload: requests.data
    })
  ).catch((errors) =>
    dispatch({
      type: GET_ERRORS,
      payload: errors.response.data
    }))
}
export const acceptRequest = (id,history) =>dispatch=>{
  axios
    .post(`/v1/requesting/acceptrequest/${id}`)
    .then(result => {
      history.push('/staff')
        console.log(result)
    }

      )
    .catch()
}
export const denyRequest = (id) =>dispatch=>{
  axios
    .post(`/v1/requesting/denyrequest/${id}`)
    .then(result => console.log(result))
    .catch()
}


// bookingLoading loading
export const requestingLoading = () => {
  return {
    type: REQUESTINGS_LOADING,
  }
}

