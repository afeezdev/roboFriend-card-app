import {
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './robotRequest.types';

import { apiCall } from '../../api/api';

export const fetchRobots =() => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING })
  apiCall('https://jsonplaceholder.typicode.com/users')
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}

   