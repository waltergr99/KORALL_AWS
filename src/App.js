import React from 'react';
import {
  Routes, 

  Route  
} from "react-router-dom";

import Login from './components/Login';


import NotFound from './components/NotFound';
import Forgot from './components/Forgot';
import CreateUser from './components/CreateUser';

const App = () =>{
 


  return (
      <div>
        <Routes>
          <Route path="/"  element={ <Login /> }> </Route>
          <Route path="login" element={ <Login /> }> </Route>
          <Route path="forgot" element={ <Forgot /> }> </Route>
          <Route path="createuser" element={ <CreateUser /> }> </Route>
          <Route path="*" element={ <NotFound /> }> </Route>
        </Routes>
        </div>
  );
}

export default App;
