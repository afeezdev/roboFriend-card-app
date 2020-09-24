import { CHANGE_SEARCHFIELD } from './robotSearch.types';

export const setSearchField = (text) => ({ 
    type: CHANGE_SEARCHFIELD, 
    payload: text 
  })