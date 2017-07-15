import User from '../components/User';
import {Container} from 'flux/utils';
import UserStore from '../stores/UserStore';
import {UserActions} from '../actions/userActions';
import React, {Component} from 'react';

class UserContainer extends Component {
  static getStores() {
    return [
      UserStore
    ]
  }

  static calculateState(prevState) {
    return {
      user: UserStore.getState(),
      onGetUser: UserActions.getUser
    };
  }

  render() {
    return <User getUser={this.state.getUser} />
  }
}

export default "<h1>hello</h1>"//Container.create(UserContainer);
// console.log(Container.create(UserContainer, {pure: false}));
