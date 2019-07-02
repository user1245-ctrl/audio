import React from 'react';
import FileUpload from './components/FileUpload';
import './App.css';

const App = () => {

  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleUpload = () => {
    
  }

  const { fileName, filePath } = res.data;

  <div className='container mt-4'>
    <h4 className='display-4 text-center mb-4'>
      Audio Player
    </h4>
    <FileUpload onFileUpload = {handleUpload} />
  </div>
};

export default App;
