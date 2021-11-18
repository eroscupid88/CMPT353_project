import axios from 'axios'
import {
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_LOADING,
  SET_CURRENT_USER,

} from './types'

export const createProfile = (data, history) => (dispatch) => {
  axios
    .post('/v1/profile/', data)
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

export const getProfiles =()=> (dispatch)=>{
  axios.get('/v1/profile/all').then(profiles=> dispatch({
    type: GET_PROFILES,
    payload: profiles.data
  })).catch((error) => {
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
    .get('/v1/profile')
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
export const deleteAccount = (history) => (dispatch) => {
  if (window.confirm('Are you sure you want to delete your profile')) {
    axios
      .delete('/v1/profile')
      .then((result) => {
        history.push('/dashboard')
      })
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

export const uploadImage = image => {
  console.log(image)
  let formData = new FormData();
  formData.append('image', image);
  console.log(formData)

  // return axios.post('/image-upload', formData)
  //   .then(json => {
  //     return json.data.imageUrl;
  //   })
  //   .catch(({response}) => Promise.reject(response.data.errors[0]))
}
