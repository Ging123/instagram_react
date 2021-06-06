import {useState} from 'react';
import axios from 'axios';
import DefaultInput from '../../../global_components/DefaultInput';
import {validateRegexp} from '../../../global_components/textValidator';

const EmailForm = ({setFirstFormIsOpen}) => {

  const [emailOrNumber, setEmailOrNumber] = useState("");
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hasAnErro, setErro] = useState("");
  const user = {
    emailOrNumber:emailOrNumber,
    fullname:fullname,
    username:username,
    password:password
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      validateData(setFirstFormIsOpen, user, setErro);
    }}>
      <DefaultInput
        value={emailOrNumber}
        onChange={setEmailOrNumber}
        classOfContainer="smaller-margin-bottom"
        placeholder="Mobile Number or Email"
      />
      <DefaultInput
        value={fullname}
        onChange={setFullname}
        classOfContainer="smaller-margin-bottom"
        placeholder="Full name"
      />
      <DefaultInput
        value={username}
        onChange={setUsername}
        classOfContainer="smaller-margin-bottom"
        placeholder="Username"
      />
      <DefaultInput
        value={password}
        onChange={setPassword}
        classOfContainer="small-margin-bottom"
        type="password"
        placeholder="Password"
      />

      {hasAnErro !== "" && <p className="erro-text margin-bottom">{hasAnErro}</p>}
      
      <input
        type="submit"
        value="Sing up"
        className="main-button"
      />
    </form>
  )
}


function validateData(setFirstFormIsOpen, user, setErro) {
  const erroInFrontEnd = validateDataInFrontEnd(user);
  if(erroInFrontEnd === "") {
    return validateDataInServer(setFirstFormIsOpen, user, setErro);
  }
  setErro(erroInFrontEnd);
}


function validateDataInFrontEnd(user) {
  //SINTA-SE LIVRE PRA COPIAR AS VALIDAÇÕES AQUI NO FRONT KAKA
  const erroInEmailOrNumber = validateEmailOrNumber(user.emailOrNumber);
  if(erroInEmailOrNumber !== "") return erroInEmailOrNumber;
  if(user.fullname.length < 2) return "the name is to short";
  if(user.password.length < 6) return "password too short";
  return "";
}


function validateEmailOrNumber(emailOrNumber) {
  const isAnInvalidNumber = validateRegexp(emailOrNumber, /^\d{9}$/);
  const isAnInvalidEmail = validateRegexp(emailOrNumber, /^\w+@{1}(outlook|hotmail|gmail)\.com{1}$/);
  if(isAnInvalidEmail && isAnInvalidNumber) {
    return "your email or number was typed wrong";
  }
  return "";
}


//METODO PARA O SERVIDOR
function validateDataInServer(setFirstFormIsOpen, user, setErro) {
  axios.post("http://localhost:5000/users/register", 
  {name:user.fullname, email:user.emailOrNumber, password:user.password})
  .then((result) => {
    if(result.data.error !== undefined) setErro(result.data.error);
    setFirstFormIsOpen(true);
  });
}




export default EmailForm;