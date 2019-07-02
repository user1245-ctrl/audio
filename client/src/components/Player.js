import React from 'react';
import PropTypes from 'prop-types';
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

const Player = ({ file }) => {
    return(
    <div key={file.filePath}>
        <ReactJkMusicPlayer audioLists = {[{name: file.fileName, musicSrc: file.filePath, cover: "http://i.imgur.com/T8eIhwc"}]} 
        mode = {"full"} 
        autoPlay = {false} 
        drag = {false} 
        showPlay = {false}
        showDownload = {false}
        showPlayMode = {false}
        showThemeSwitch = {false}
        toggleMode = {false}
        remove = {false} />
    </div>
    );
};

Player.propTypes = {
  file: PropTypes.object.isRequired
};

export default Player;