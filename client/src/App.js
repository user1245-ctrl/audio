import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import Play from './Play';
import Pause from './Pause';
import './App.css';
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

const App = () => {

  const [uploadedFiles, setUploadedFiles] = useState([]);



  const handleUpload = (newFile) => {
    setUploadedFiles( (uploadedFiles) => {
      return [...uploadedFiles, newFile];
    });
  }


  <div className='container mt-4'>
    <h4 className='display-4 text-center mb-4'>
      Audio Player
    </h4>
    <FileUpload onFileUpload = {handleUpload} />
    <Play />
    <Pause />
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
};

export default App;
