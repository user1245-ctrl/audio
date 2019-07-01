import React from 'react';
import PropTypes from 'prop-types';

const Player = ({ file }) => {
    return(
    <div key={file.filePath}>
        <h3>{file.fileName}</h3>
        <audio controls src={file.filePath}></audio>
    </div>
    );
};

Player.propTypes = {
  file: PropTypes.object.isRequired
};

export default Player;