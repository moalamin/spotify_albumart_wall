import React from 'react';
import { Link } from 'react-router-dom'
import qString from 'query-string';

export default (props) => {
  let authInfo= qString.parse(window.location.hash);
  localStorage.setItem('spotify-access-token', authInfo["access_token"])
  localStorage.setItem('spotify-token-type', authInfo["token_type"])
  return (
    <Link to='/' onClick={props.updateUserId}>
      <div className="btn-group-lg">
        <button className="btn btn-primary">
          Generate Albums
        </button>
      </div>
    </Link>
  )
}
