import {
  GET_VALUE,
  GET_VALUE_SUCCESS,
  GET_VALUE_ERROR
} from '../constants/testitem';

const exAPIValue = () => {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: "I got value!"
      });
    }, 500);
  });
};

export const getValue = async (dispatch: any) => {
  dispatch({ type: GET_VALUE });
  exAPIValue().then((response: any) => {
    response.success ?
      dispatch(getValueSuccess(response.data)) :
      dispatch(getValueError(response.data))
  });
};

const getValueSuccess = (payload: string) => {
  return ({
    type: GET_VALUE_SUCCESS,
    payload
  });
};

const getValueError = (message: string) => {
  return ({
    type: GET_VALUE_ERROR,
    message
  });
};
