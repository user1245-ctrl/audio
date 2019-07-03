import React, { Fragment, useState, useRef, createRef, useEffect } from 'react';
import FileUpload from './components/FileUpload';
import Play from './components/Play';
import Pause from './components/Pause';
import './App.css';
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

const App = () => {

  const [uploadedFiles, setUploadedFiles] = useState([]);
  // const [isPlaying, setIsPlaying] = useState(false);
  const refCollection = useRef([]);
  useEffect(() => {refCollection.current = uploadedFiles.map( () => createRef())}, [uploadedFiles]);

  const handleUpload = (newFile) => {
    setUploadedFiles( (uploadedFiles) => {
      return [...uploadedFiles, newFile];
    });
  }

  const handlePlay = () => {
    console.log("play");
    console.log(refCollection.current);
    // refCollection.current.forEach(ref => {
    //   console.log("boucle");
    //   console.log(ref);
    //   ref.audio.play();
    // });
  }

  const handlePause = () => {
    // ref.current.audio.pause();
    refCollection.current.forEach(ref => {
      ref.audio.pause();
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
          <Play onPlay = {handlePlay} />
          <Pause onPause = {handlePause} />
        </div>
        {uploadedFiles.map((item, i) => {

          return(
            <div key={item.filePath}>
              <ReactJkMusicPlayer ref = {refCollection.current[i]} audioLists = {[{name: item.fileName, musicSrc: item.filePath}]} 
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