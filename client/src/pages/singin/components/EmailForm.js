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
  //É enviado um post para o servidor e é esperado que retorne uma string
 
  /*Essa string deverá conter o erro que o usuario fez no input, por exemplo
  "o email já existe" ou "email inválido"*/
  
  /*Caso o usuario tenha digitado tudo corretamente essa string deve ser retornada
  vazia ou seja "" */

  /*O que será validado...

  Email ou número: deve se anilizar se o email ou número é valido e se ele já 
  existe no banco de dados

  Username: Deve se verificar se o username já existe no sistema

  fullname: Deve-se verificar se o fullname tem mais de uma letra

  password: deve-se verificar se o password tem mais de 6 letras 

  */
  
  //"user" é um objeto com os dados digitado nos inputs
  axios.post("", user).then((erro) => {
    if(erro === "") return setFirstFormIsOpen(false);
    setErro(erro);
  });
}




export default EmailForm;