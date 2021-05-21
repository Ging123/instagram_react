import React from 'react';
import './style.scss';
import {GetTheApp} from '../../global_components/containers'; 
import Cellphone from './components/Cellphone';
import {FirstWhiteContainer, SecondWhiteContainer} from './components/WhiteContainers';

const LoginOrSingin = () => {
  document.title = "Instagram";
  return (
    <section id="page-container">
      <Cellphone/>
      
      <div className="login-or-singin-container">
        <FirstWhiteContainer/>
        <SecondWhiteContainer/>
        <GetTheApp/>
      </div>
    </section>
  )
}

export default LoginOrSingin;