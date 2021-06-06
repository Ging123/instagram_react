import {useHistory} from 'react-router-dom';
import logo from '../../../assets/Instagram-Logo.png';
import LoginForm from './LoginForm';
import {Or} from '../../../global_components/containers';

const FirstWhiteContainer = ({setUser}) => {
  const altMensage = "it wasn't possible to load this image";

  return (   
    <div className="container">
      <img src={logo} alt={altMensage} className="instagram-logo"/>
      <LoginForm setUser={setUser}/>
      <Or/>
      <div id="login-with-facebook-container">
        <i className="fab fa-facebook-square facebook-icone"/>
        <span id="login-with-facebook"> Log in with Facebook</span>
      </div>
    <div id="forgot-password">forgot password?</div>
  </div>
  )
}

const SecondWhiteContainer = () => {
  const history = useHistory();
  
  return (
    <div className="container">
      <span id="singup-text">Don't have an account?
      <span onClick={() => history.push("/singin")}>Sign up</span>
    </span>
    </div>
  )
}

export {FirstWhiteContainer, SecondWhiteContainer}
