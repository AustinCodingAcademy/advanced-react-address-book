import {combineReducers} from 'redux';


function users(state=[], action) {
  return state;
}

function searchText(state="", action) {
  return state;
}

function selectedUser(state={}, action) {
  return state;
}


const rootReducer = combineReducers({
 users,searchText,selectedUser
});
export default rootReducer;
