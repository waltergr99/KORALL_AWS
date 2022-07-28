import React, { useState, useContext, useEffect, useLayoutEffect } from 'react';
import {
  BrowserRouter , Routes, 
  Switch,
  Route,
  Link, NavLink, Navigate, useNavigate  
} from "react-router-dom";

import Login from './components/Login';
import Dashboard from './components/Dashboard';

import LoggedContext from './components/context/LoggedContext';
import NotFound from './components/NotFound';
import Forgot from './components/Forgot';
import CreateUser from './components/CreateUser';

const App = () =>{

  const navigate = useNavigate();
  // if(localStorage.getItem('pocketbase_auth')){
  //   setLogged(true);
  // }
  // else{
  //   setLogged(false);
  // }


 
//   useEffect(()=>{
//     const logged = localStorage.getItem('pocketbase_auth');

//     if(!logged) {
//       navigate("/login")
//     }else{
//       navigate("/")
//     }
// }, [navigate])

  return (
    // <LoggedContext.Provider value={{logged,setLogged}}>
      <div>
        <Routes>
          <Route path="/"  element={ <Dashboard /> }> </Route>
          <Route path="login" element={ <Login /> }> </Route>
          <Route path="forgot" element={ <Forgot /> }> </Route>
          <Route path="createuser" element={ <CreateUser /> }> </Route>
          <Route path="*" element={ <NotFound /> }> </Route>
        </Routes>
        </div>
    // </LoggedContext.Provider>
  );
}

export default App;
