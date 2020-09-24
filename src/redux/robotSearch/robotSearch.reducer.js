import { CHANGE_SEARCHFIELD } from './robotSearch.types';

const initialStateSearch = {
    searchField: ''
  }
  
  export const searchRobots = (state=initialStateSearch, action={}) => {
    switch (action.type) {
      case CHANGE_SEARCHFIELD:
        return {
          ...state,
          searchField: action.payload
      }
      default:
        return state
    }
  }
  