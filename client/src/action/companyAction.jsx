import axios from 'axios'
import {
  CREATE_COMPANY,
  GET_COMPANY, GET_CURRENT_COMPANY, GET_ERRORS, LOADING_COMPANY,
} from './types'


//create company

export const createCompany = (data,history) => (dispatch) =>{
  console.log(data)
  axios
    .post('/v1/company/', data)
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

export const getCurrentCompany = () => dispatch => {
  dispatch(setCompanyLoading());
  axios
    .get('/v1/company')
    .then(result =>
      dispatch({
        type: GET_CURRENT_COMPANY,
        payload: result.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Company loading
export const setCompanyLoading = () => {
  return {
    type: LOADING_COMPANY
  };
};
