import {ReduceStore} from 'flux/utils';
import {UserActionTypes, UserActions} from '../actions/userActions.js';
import WallDispatcher from '../WallDispatcher.js';
import axios from 'axios';

class UserStore extends ReduceStore {
  getInitialState() {
    return {};
  }

  reduce (state, action) {
    switch(action.type) {
      case UserActionTypes.UPDATE_USER:
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('spotify-access-token')}`;
        axios.get('https://api.spotify.com/v1/me').then(payload => {
          // this.setState({ userId: payload.data.id });
          console.log(payload.data);
          return {user: payload.data}
        });
      default:
        return state;
    }
  }
}

export default new UserStore();
