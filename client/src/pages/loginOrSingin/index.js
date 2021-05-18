import React, {useState} from 'react';
import './style.scss';
import logo from '../../assets/Instagram-Logo.png'

const LoginOrSingin = () => {
  document.title = "Instagram";
  const altMensage = "it wasn't possible to load this image";

  const [nameOrNumber, setNameOrNumber] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section id="login-or-singin-container">
      <div id="cellphone-image-container">
        
      </div>

      <div className="main-page-container">
        <div className="container">
          <img src={logo} alt={altMensage} className="instagram-logo"/>
          <form className="flex-column">
            <input 
              type="text"
              value={nameOrNumber}
              onChange={(e) => setNameOrNumber(e.target.value)}
              className="default-input"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="default-input"
            />
            <input
              type="submit"
              value="Log in"
            />
          </form>
        </div>

        <div className="container">
          <span id="singup-text">Don't have an account?</span>
        </div>

        <div>
          
        </div>
      </div>
    </section>
  )
}

export default LoginOrSingin;
