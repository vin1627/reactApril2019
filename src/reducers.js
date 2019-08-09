import { CHANGE_SEARCH_FIELD } from './constants';

const intialState = {
  searchField: ''
}

export const searchRobots = (state=intialState, action={}) => {
  switch(action.type){
    case CHANGE_SEARCH_FIELD:
      //console.log(state)
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
}


