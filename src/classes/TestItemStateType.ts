import {ResponseType} from './ResponseType';

export class TestItemStateType {
  isLoading: boolean = false;
  isSuccess: boolean = false;
  isError: boolean = false;
  textboxSuccessData: ResponseType = new ResponseType();
  textboxErrorData: ResponseType = new ResponseType();
}
