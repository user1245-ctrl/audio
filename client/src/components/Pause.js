import React from 'react'

const Pause = ({onPause}) => {
  return (
    <div className="player" style = {{width: "50px"}}>
        <svg className="button" viewBox="0 0 60 60" onClick = {onPause} >
        <polygon points="0,0 15,0 15,60 0,60" />
        <polygon points="25,0 40,0 40,60 25,60" />
        </svg>
    </div>
  )
}

export default Pause