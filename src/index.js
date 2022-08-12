import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter} from "react-router-dom";
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
   <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
    
   </React.StrictMode> 
);

