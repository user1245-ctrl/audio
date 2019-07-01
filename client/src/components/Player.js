import React from 'react';
import PropTypes from 'prop-types';
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

const Player = ({ file }) => {
    return(
    <div key={file.filePath}>
        <h3>{file.fileName}</h3>
        <ReactJkMusicPlayer audioLists = {[{name: file.fileName, musicSrc: file.filePath}]} 
        mode = {"full"} autoPlay = {false} drag = {false} />
        {/* <audio controls src={file.filePath}></audio> */}
    </div>
    );
};

Player.propTypes = {
  file: PropTypes.object.isRequired
};

export default Player;