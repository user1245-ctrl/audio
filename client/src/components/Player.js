import React from 'react';
import PropTypes from 'prop-types';

const Player = ({ files }) => {
    return(
    <div key={filePath}>
        <h3>{fileName}</h3>
        <audio controls src={filePath}></audio>
    </div>
    );
};

Player.propTypes = {
  files: PropTypes.array.isRequired
};

export default Player;