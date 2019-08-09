import { CHANGE_SEARCH_FIELD } from './constants';

const intialState = {
  searchField: ''
}

export const searchRobots = (state=intialState, action={}) => {
  const CHANGE_SEARCH_FIELD_RESULT = "TEST"
  switch(action.type){
    case CHANGE_SEARCH_FIELD:
      //console.log(state)
      return Object.assign({}, state, { searchField: action.payload });
    case CHANGE_SEARCH_FIELD_RESULT:
          //console.log(state)
    return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
}


