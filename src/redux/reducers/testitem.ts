import {
  GET_VALUE_ERROR,
  GET_VALUE_SUCCESS,
  GET_VALUE
} from '../constants/testitem';
import { errorGetValue, startGetValue, successGetValue } from '../utils/testitem';
import { TestItemStateType } from '../../classes/TestItemStateType';
import { ResponseType } from '../../classes/ResponseType';

let initialState: any = new TestItemStateType();

export default function TestItemReducer(state = initialState, action: { type: string, payload: string }) {
  let responseData: ResponseType = new ResponseType();
  switch (action.type) {
    case GET_VALUE:
      return Object.assign({}, startGetValue(state));
    case GET_VALUE_SUCCESS:
      responseData = new ResponseType();
      responseData.message = action.payload;
      const textboxSuccessData: ResponseType = responseData;
      return Object.assign({}, successGetValue(state), { textboxSuccessData });
    case GET_VALUE_ERROR:
      responseData = new ResponseType();
      responseData.message = action.payload;
      const textboxErrorData: ResponseType = responseData;
      return Object.assign({}, errorGetValue(state), { textboxErrorData });
    default:
      return state;
  }
};


