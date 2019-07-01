import React from 'react';
import FileUpload from './components/FileUpload';
import './App.css';

const App = () => (
  <div className='container d-flex flex-column align-items-center mt-4'>
    <h4 className='display-4 text-center mb-4'>
      Audio Player
    </h4>


    <FileUpload />
  </div>
);

export default App;
