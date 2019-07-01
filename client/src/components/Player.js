import React from 'react';
import PropTypes from 'prop-types';
import ReactJkMusicPlayer from "react-jinke-music-player";

const Player = ({ file }) => {
    return(
    <div key={file.filePath}>
        <h3>{file.fileName}</h3>
        <ReactJkMusicPlayer musicSrc = {file.filePath} />
        {/* <audio controls src={file.filePath}></audio> */}
    </div>
    );
};

Player.propTypes = {
  file: PropTypes.object.isRequired
};

export default Player;