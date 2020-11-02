import Axios from 'axios';
import {
  GET_VALUE,
  GET_VALUE_SUCCESS,
  GET_VALUE_ERROR
} from '../constants/testitem';

const exAPIValue = (api:any) => {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      let responseData = Axios.get(api)
      resolve({
        success: true,
        data: responseData
      });
    }, 10);
  });
};

export const getValue = async (dispatch: any,api:any) => {
  return await Axios.get(api)
  .then((response: any) => {
    console.log(response.data)
    dispatch({type:GET_VALUE, payload:response.data})
  })
};

const getValueSuccess = (payload: any) => {
  return ({
    type: GET_VALUE_SUCCESS,
    payload
  });
};

const getValueError = (message: any) => {
  return ({
    type: GET_VALUE_ERROR,
    message
  });
};
