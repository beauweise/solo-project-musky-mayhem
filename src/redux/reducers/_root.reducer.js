import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import getDropDownInfo from './getDropdownInfo.reducer';
import addData from './addData.reducer';
import getHistory from './getHistory.reducer';
import details from './getDetails.reducer';
import edit from './editData.reducer';
import lakeFilter from './lakefilter.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  getDropDownInfo,
  addData,
  getHistory,
  details,
  edit,
  lakeFilter

});

export default rootReducer;
