import React from 'react'

const Play = () => {
  return (
    <div className="player" style = {{width: "50px"}}>
      <svg className="button" viewBox="0 0 60 60" >
        <polygon points="0,0 50,30 0,60" />
      </svg>
    </div>
  )
}

export default Play