import React, { Component } from 'react';
import axios from 'axios';

export default class AlbumWall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: null
    };
  }
  componentWillMount() {
    let that = this;
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('spotify-access-token')}`;
    axios
      .get('https://api.spotify.com/v1/me/top/tracks?limit=48')
      .then(data => that.setState({ tracks: data.data.items }))
      .catch(e => console.log(e));
  }
  render() {
    console.log(this.state);
    let albums = this.state.tracks ?
      this.state.tracks.map( (item) => {
        return (
          <div key={item.id} className="col-3">
            <img className="img-fluid" src={item.album.images[0].url} alt={item.album.url}/>
          </div>
        )
      })
      : [];

    return this.state.tracks
      ? <div className="row justify-content-center">
          {albums}
        </div>
      : <h1>Albums Will Show Here</h1>;
  }
}
