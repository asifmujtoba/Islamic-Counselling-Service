import { userConstants } from './types';
//import { history } from '../helpers';

export const userActions = {
  updateUsernameHeader,
  setUserData,
  setUserPubs,
  deleteUserData,
};

export function updateUsernameHeader(username) {
  return {
    type: userConstants.SET_USERNAME_NAVBAR,
    username,
  };
}

export function setUserData(userData) {
  return {
    type: userConstants.SET_USER_DATA,
    payload: {
      ...userData,
    },
  };
}

export function setUserPubs(pubs) {
  return {
    type: userConstants.SET_USER_PUBS,
    payload: pubs,
  };
}

export function deleteUserData() {
  return {
    type: userConstants.DELETE_USER_DATA,
  };
}
