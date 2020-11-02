import {PeopleStateType} from '../../classes/PeopleStateType'
import {ResponseType} from '../../classes/ResponseType'

export const startGetValue = (_state: PeopleStateType) => ({
    isLoading: true,
    isSuccess: false,
    isError: false,
    textboxSuccessData: new ResponseType(),
    textboxErrorData: new ResponseType()
  });
  
  export const successGetValue = (_state: PeopleStateType) => ({
    isLoading: false,
    isSuccess: true,
    isError: false,
    textboxSuccessData: new ResponseType(),
    textboxErrorData: new ResponseType()
  });
  
  export const errorGetValue = (_state: PeopleStateType) => ({
    isLoading: false,
    isSuccess: false,
    isError: true,
    textboxSuccessData: new ResponseType(),
    textboxErrorData: new ResponseType()
  });