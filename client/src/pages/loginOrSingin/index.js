import React, {useState} from 'react';
import './style.scss';
import logo from '../../assets/Instagram-Logo.png'
import {Or, GetTheApp} from '../../components/loginOrSingin/index'; 

const LoginOrSingin = () => {
  document.title = "Instagram";
  const altMensage = "it wasn't possible to load this image";
  const [nameOrNumber, setNameOrNumber] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section id="page-container">
      <div id="cellphone-container">
        
      </div>

      <div className="login-or-singin-container">
        <div className="container">
          <img src={logo} alt={altMensage} className="instagram-logo"/>
          <form className="flex-column small-margin-bottom">
            <input 
              type="text"
              value={nameOrNumber}
              onChange={(e) => setNameOrNumber(e.target.value)}
              className="default-input smaller-margin-bottom"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="default-input small-margin-bottom"
            />
            <input
              type="submit"
              value="Log in"
              className="main-button"
            />
          </form>
          <Or/>
          <div id="login-with-facebook-container">
            <i className="fab fa-facebook-square facebook-icone"/>
            <span id="login-with-facebook"> Log in with Facebook</span>
          </div>
          <div id="forgot-password">forgot password?</div>
        </div>

        <div className="container">
          <span id="singup-text">Don't have an account?</span>
        </div>

        <GetTheApp/>
      </div>
    </section>
  )
}

export default LoginOrSingin;
