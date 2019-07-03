import React from 'react'

const Play = ({onPlay}) => {
  return (
    <div className="player" style = {{width: "50px"}}>
      <svg className="button" viewBox="0 0 60 60" onClick = {onPlay} >
        <polygon points="0,0 50,30 0,60" />
      </svg>
    </div>
  )
}

export default Play