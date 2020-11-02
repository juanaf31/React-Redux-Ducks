import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { TestItemStateType } from '../../classes/TestItemStateType';

import { getValue } from '../../redux/actions';
import { api } from '../../redux/constants/api';

const Textbox = () => {
  const exampleState: TestItemStateType = useSelector(
    (state: any) => state.testItem
  );
  const dispatch = useDispatch();

  return (
    <div>
      {exampleState.isLoading ? (
        <p>Loading...</p>
      ) : exampleState.isSuccess ? (
        <p>{exampleState.textboxSuccessData.message}</p>
      ) : (
        <p>{exampleState.textboxErrorData.message}</p>
      )}
      <button onClick={() => getValue(dispatch,api)}>Click</button>
    </div>
  );
};

export default Textbox;
