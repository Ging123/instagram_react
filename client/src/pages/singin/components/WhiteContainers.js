import {useHistory} from 'react-router-dom';
import logo from '../../../assets/Instagram-Logo.png';
import {Or} from '../../../global_components/containers';
import EmailForm from './EmailForm';
import DateForm from './DateForm';
import cake from '../../../assets/cake.png';

const altMensage = "it wasn't possible to load this image";

const WhiteContainerForEmail = ({setFirstFormIsOpen}) => {
  
  const termsLink = "https://help.instagram.com/581066165581870";
  const dataPolicyLink = "https://help.instagram.com/519522125107875";
  const cookiesLink = "https://help.instagram.com/1896641480634370?ref=ig";

  return (   
    <div className="container">
      <img src={logo} alt={altMensage} className="instagram-logo"/>
      <div id="sing-up-to-see-text">
        Sign up to see photos and videos from your friends.  
      </div>
      <button className="main-button margin-bottom">
        <i className="fab fa-facebook-square facebook-icone"/>
        Log in with facebook
      </button>
      <Or className="margin-bottom"/>
      <EmailForm setFirstFormIsOpen={setFirstFormIsOpen}/>
      <div id="terms-mensage">
        By signing up, you agree to our 
        <a href={termsLink} target="_blanket"> Terms</a>, 
        <a href={dataPolicyLink} target="_blanket"> Data Policy</a> and 
        <a href={cookiesLink} target="_blanket"> Cookies Policy.</a>
      </div>
  </div>
  )
}


const WhiteContainerForDate = ({setFirstFormIsOpen}) => {
  return (
    <div className="container">
      <div className="text-align-center margin-bottom">
        <img src={cake} alt={altMensage} id="cake-image"/>
      </div>
      <h3 className="text-align-center big-margin-bottom">Add Your Birthday</h3>
      <div className="text-align-center">
        This won't be a part of your public profile.
      </div>
      <div id="why-need-birthday-text" className="link-text">
        Why do I need to provide my birthday?
      </div>
      <DateForm/>
      <div 
        className="link-text text-align-center bold"
        onClick={() => setFirstFormIsOpen(true)}>
        Go Back
      </div>
    </div>
  )
}


const SecondWhiteContainer = () => {
  const history = useHistory();
  
  return (
    <div className="container">
      <span id="log-in-text">Have an account? 
        <span onClick={() => history.push("/")}> Log in</span>
      </span>
    </div>
  )
}

export {WhiteContainerForEmail, SecondWhiteContainer, WhiteContainerForDate}