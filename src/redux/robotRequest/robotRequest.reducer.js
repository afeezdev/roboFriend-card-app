import {
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
   } from './robotRequest.types';

   
const initialStateRobots = {
    robots: [],
    isPending: false
  }
  
  export const requestRobots = (state=initialStateRobots, action) => {
    switch (action.type) {
      case REQUEST_ROBOTS_PENDING:
        return {
          ...state,
          isPending: true
      }
      case REQUEST_ROBOTS_SUCCESS:
        return {
          ...state,
          robots: action.payload,
          isPending: false
      }
      case REQUEST_ROBOTS_FAILED:
        return {
          ...state,
          error: action.payload
      }
      default:
        return state
    }
  }