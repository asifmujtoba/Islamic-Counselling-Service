import { combineReducers } from 'redux';

import { users } from './user.reducer';
import { snackbarReducer } from './snackbar.reducer';
import { postsReducer } from './posts.reducer';
import { bookingReducer } from './booking.reducer';
export const rootReducer = combineReducers({
  userInfo: users,
  snackbarData: snackbarReducer,
  posts: postsReducer,
  booking: bookingReducer,
});
