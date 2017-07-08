import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import SpotifyCallback from './components/SpotifyCallback';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('spotify-access-token')}`;

    this.state = {
      userId: null
    };
  }
  componentWillMount() {
    axios.get('https://api.spotify.com/v1/me').then( (payload) => {
      this.setState({userId: payload.data.id})
    });
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" render={ (props) => <Home user={this.state.userId} />} />
          <Route path="/spotify_callback" component={SpotifyCallback} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;