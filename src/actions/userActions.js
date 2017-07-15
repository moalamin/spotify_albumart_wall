import WallDispatcher from '../WallDispatcher';

export const UserActionTypes = {
  GET_USER: 'GET_USER'
}

export const UserActions = {
  getUser() {
    WallDispatcher.dispatch({
      type: UserActionTypes.GET_USER
    });
  },
};
