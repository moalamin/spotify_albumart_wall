import React from 'react';

export default (props) => {
  console.log(props)
  return (
    <div>
      <h1 onClick={props.onGetUser}> User Here...</h1>
    </div>
  )
}
