import React, { Component } from 'react';
import spotify from '../spotify';
import { Link } from 'react-router-dom';
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <section className="home-jumbotron">
          <div className="jumbotron home-jumbotron--text">
            <h1>Welcome to the Spotify Album App</h1>
          </div>
        </section>
        {this.props.user
          ? <div className="row justify-content-center">
              <Link to="/album_wall">
                <div className="btn-group btn-group-lg">
                  <button className="btn btn-primary">Generate Album Art</button>
                </div>
              </Link>
            </div>
          : <section className="login">
              <div className="row justify-content-center">
                <a
                  href={`https://accounts.spotify.com/authorize?client_id=${spotify.client_id}&redirect_uri=http://localhost:4000/spotify_callback&response_type=token&scope=user-top-read`}
                >
                  <div className="btn-group btn-group-lg">
                    <button className="btn btn-primary">Login to Spotify</button>
                  </div>
                </a>
              </div>
            </section>}
      </div>
    );
  }
}

export default Home;
