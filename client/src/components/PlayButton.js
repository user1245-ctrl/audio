import React, { useState } from 'react'
import Play from './Play';
import Pause from './Pause';

const PlayButton = ({onPlay}) => {


    const [playing, setPlaying] = useState(false);

    const handlePlayClick = () => {
    if (!playing) {
        setPlaying(true);

    } else {
        setPlaying(false);

    }
    }

    return (
      <div className="player" style = {{width: "50px"}} onClick = {onPlay} >
        {playing? <Pause onPlayClick={handlePlayClick} /> : <Play onPlayClick={handlePlayClick} />}
      </div>
    )

}

export default PlayButton;