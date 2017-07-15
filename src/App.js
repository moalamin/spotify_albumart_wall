import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './components/Home';
import SpotifyCallback from './components/SpotifyCallback';
import AlbumWall from './components/AlbumWall';
import User from './containers/UserContainer.js'

class App extends Component {
  constructor(props) {
    super(props);
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('spotify-access-token')}`;
    this.state = {
      userId: null
    };
    this.updateUserId = this.updateUserId.bind(this)
  }
  componentWillMount() {
    axios.get('https://api.spotify.com/v1/me').then(payload => {
      this.setState({ userId: payload.data.id });
    });
  }

  updateUserId() {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('spotify-access-token')}`;
    axios.get('https://api.spotify.com/v1/me').then(payload => {
      this.setState({ userId: payload.data.id });
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" render={props => <Home user={this.state.userId} />} />
          <Route exact path="/album_wall" component={AlbumWall} />
          <Route path="/spotify_callback" render={props => <SpotifyCallback updateUserId={this.updateUserId}/>} />
          <Route exact path="/user" component={User} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
