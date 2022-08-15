import React from 'react';
import { Route,
  Routes, 
 
} from "react-router-dom";

import Login from './components/Login';

import PremiumPage from './components/PremiumPage';
import NotFound from './components/NotFound';
import Forgot from './components/Forgot';
import CreateUser from './components/CreateUser';

const App = () =>{
 


  return (
      <div>
       
        <Routes>
          <Route path=""  element={ <Login /> }> </Route>
          <Route path="login" element={ <Login /> }> </Route>
          <Route path="forgot" element={ <Forgot /> }> </Route>
          <Route path="createuser" element={ <CreateUser /> }> </Route>
          <Route path="*" element={ <NotFound /> }> </Route>
          <Route path='/premium' element={<PremiumPage/>}></Route>
        </Routes>
        </div>
  );
}

export default App;
