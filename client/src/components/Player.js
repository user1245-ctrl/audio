import React from 'react';
import PropTypes from 'prop-types';

const Player = ({ files }) => {
  return files.map((item) => {
    return(
    <div key={item.filePath}>
        <h3>{item.fileName}</h3>
        <audio controls src={item.filePath}></audio>
    </div>
    );
  });
};

Player.propTypes = {
  files: PropTypes.array.isRequired
};

export default Player;