import {
    GET_VALUE_ERROR,
    GET_VALUE_SUCCESS,
    GET_VALUE
  } from '../constants/people';
  import { errorGetValue, startGetValue, successGetValue } from '../utils/people';
  import { PeopleStateType } from '../../classes/PeopleStateType';
  import { ResponseType } from '../../classes/ResponseType';

let initialState:any = new PeopleStateType();

export default function PeopleReducer(state = initialState, action: { type: string, payload: any }) {
    switch (action.type) {
      case GET_VALUE:
        return {...state,people:action.payload};
      default:
        return state;
    }
  };