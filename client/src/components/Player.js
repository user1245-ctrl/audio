import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';

const Player = ({ file }) => {

    const [volume, setVolume] = useState('');

    const volumeChange = e => {
        setVolume(e.target.);
    };

    return(
    <div key={file.filePath}>
        <h3>{file.fileName}</h3>
        <audio controls src={file.filePath}></audio>
        <Slider defaultValue = {50} onChange = {volumeChange} />
    </div>
    );
};

Player.propTypes = {
  file: PropTypes.object.isRequired
};

export default Player;