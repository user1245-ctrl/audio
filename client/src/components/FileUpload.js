import React, { Fragment, useState } from 'react';
import Message from './Message';
import Progress from './Progress';
import Player from './Player';
import axios from 'axios';

const FileUpload = () => {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [message, setMessage] = useState('');
    const [uploadPercentage, setUploadPercentage] = useState(0);

  
    const onChange = e => {
      setFile(e.target.files[0]);
      setFilename(e.target.files[0].name);
    };
  
    const onSubmit = async e => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('file', file);
  
      try {
        const res = await axios.post('/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          onUploadProgress: progressEvent => {
            setUploadPercentage(
              parseInt(
                Math.round((progressEvent.loaded * 100) / progressEvent.total)
              )
            );
  
            // Clear percentage
            setTimeout(() => setUploadPercentage(0), 10000);
          }
        });
  
        const { fileName, filePath } = res.data;
  
        setUploadedFiles( (uploadedFiles) => {
            return [...uploadedFiles, { fileName, filePath }];
        });

        setMessage('File Uploaded');
        
      } catch (err) {
          if (err.response.status === 500) {
              setMessage('There was a problem with the server');
            } else {
                setMessage(err.response.data.msg);
        }
    }
};
    return (
      <Fragment>
        {message && <Message msg={message} />}
        <form onSubmit={onSubmit}>
          <div className='custom-file mb-4'>
            <input
              type='file'
              className='custom-file-input'
              id='customFile'
              onChange={onChange} multiple
            />
            <label className='custom-file-label' htmlFor='customFile'>
              {filename}
            </label>
          </div>

          <Progress percentage={uploadPercentage} />
  
          <input
            type='submit'
            value='Upload'
            className='btn btn-primary btn-block mt-4 mb-4'
          />
        </form>
        {uploadedFiles.map((item) => {

            return <Player file = {item} key = {item.filePath} />

        })};
      </Fragment>
    );
  };
  
  export default FileUpload;