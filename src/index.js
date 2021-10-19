import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import DisplayFileInfo from './modals/DisplayFileInformation'
import nfss from './icons/netrafilehosting.png'
import DeleteIcon from './icons/delete-nfss.png'
import './style.css'

ReactDOM.render(
  <React.StrictMode>
    <div>
    <img className="nfss-heading" src={nfss} />
  
      
    <App></App>  
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


