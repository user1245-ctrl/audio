import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';

const Player = ({ file }) => {

    const [volume, setVolume] = useState('');
    const ref = useRef();

    const volumeChange = e => {
        setVolume(e/100);
        ref.current.volume = volume;
    };

    return(
    <div key={file.filePath}>
        <h3>{file.fileName}</h3>
        <audio controls src={file.filePath} ref = {ref}></audio>
        <Slider min = {0} max = {100} defaultValue = {50} onChange = {volumeChange} />
    </div>
    );
};

Player.propTypes = {
  file: PropTypes.object.isRequired
};

export default Player;