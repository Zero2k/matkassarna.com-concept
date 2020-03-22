import React from 'react';

export const useReducer = (reducer, initialState) => {
  const [state, setState] = React.useState(initialState);

  const dispatch = action => {
    const nextState = reducer(state, action);
    setState(nextState);
  };

  return [state, dispatch];
};
