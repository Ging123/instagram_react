import React from 'react';
import './style.scss';
import {GetTheApp} from '../../global_components/containers'; 
import Cellphone from './components/Cellphone';
import {FirstWhiteContainer, SecondWhiteContainer} from './components/WhiteContainers';

const Login = ({setUser}) => {

  document.title = "Instagram";
  return (
    <section id="page-container">
      <Cellphone/>
      
      <div className="login-or-singin-container">
        <FirstWhiteContainer setUser={setUser}/>
        <SecondWhiteContainer/>
        <GetTheApp/>
      </div>
      
    </section>
  )
}

export default Login;