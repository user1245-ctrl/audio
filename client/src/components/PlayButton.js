import React, { Component, useState } from 'react'
import Play from './Play';
import Pause from './Pause';

const PlayButton = () => {


    const [playing, setPlaying] = useState(false);


const handlePlayerClick = () => {
  if (!playing) {
    setPlaying(true);
  } else {
    setPlaying(false);

  }
}

    return (
      <div className="player" style = {{width: "50px"}} >
        {playing? <Pause onPlayerClick={handlePlayerClick} /> : <Play onPlayerClick={handlePlayerClick} />}
      </div>
    )

}

export default PlayButton;