/* eslint-disable */
import {
    ADD_MISSIONS, FETCH_MISSIONS, REQUEST_FAILURE, URL
  } from './missionsTypes';
  
  const initialState = [];
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MISSIONS: 
        return action.payload
      case REQUEST_FAILURE:
        return state;
  
      default:
        return state;
    }
  };
  
  export default reducer;