import React, { Fragment, useState } from 'react';
import FileUpload from './components/FileUpload';
import Play from './components/Play';
import Pause from './components/Pause';
import './App.css';
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

const App = () => {

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);



  const handleUpload = (newFile) => {
    setUploadedFiles( (uploadedFiles) => {
      return [...uploadedFiles, newFile];
    });
  }

  return(
    <Fragment>
      <div className='container mt-4'>
        <h4 className='display-4 text-center mb-4'>
          Audio Player
        </h4>
        <FileUpload onFileUpload = {handleUpload} />
        <div className = "d-flex justify-content-center mb-4">
          <Play onClick = {} />
          <Pause />
        </div>
        {uploadedFiles.map((item) => {

          return(
            <div key={item.filePath}>
              <ReactJkMusicPlayer audioLists = {[{name: item.fileName, musicSrc: item.filePath}]} 
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
          )

        })}

      </div>
    </Fragment>
  )
};

export default App;
