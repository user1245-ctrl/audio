import React from 'react';
import PropTypes from 'prop-types';

const Player = ({ files }) => {
  return files.map((item) => {
    return(
    <div className={'player' + item} key={item}>
        <audio controls src={item.filePath} key={item}></audio>
    </div>
    );
  });
};

Player.propTypes = {
  files: PropTypes.array.isRequired
};

export default Player;