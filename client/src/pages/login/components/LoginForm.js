import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import DefaultInput from '../../../global_components/DefaultInput';
import axios from 'axios';

const LoginForm = ({setUser}) => {
  const [nameOrNumber, setNameOrNumber] = useState("");
  const [password, setPassword] = useState("");
  const [hasAnErro, setErro] = useState("");
  const history = useHistory();

  return (
    <form className="flex-column small-margin-bottom" 
    onSubmit={(e) => validateLogin(e,nameOrNumber,password,setErro,setUser,history)}>
      <DefaultInput
        value={nameOrNumber}
        onChange={setNameOrNumber}
        classOfContainer="smaller-margin-bottom"
        placeholder="Phone number, username, or email"
      />
      <DefaultInput
        type="password"
        value={password}
        onChange={setPassword}
        classOfContainer="smaller-margin-bottom"
        placeholder="password"
      />

      {hasAnErro !== "" && <p className="erro-text margin-bottom">{hasAnErro}</p>}

      <input
        type="submit"
        value="Log in"
        className="main-button"
      />
    </form>
  )
}


function validateLogin(e, nameOrNumber, password, setErro, setUser, history) {
  e.preventDefault();
  if(nameOrNumber === "") return setErro("email input is empty");
  if(password === "") return setErro("password input is empty");
  axios.post("http://localhost:5000/users/login", 
  {email:nameOrNumber, password:password}).then((result) => {
    if(result.data.error === undefined) {
      setUser(result.data);
      return history.push("/home");
    } 
    setErro(result.data.error);
  });
}

export default LoginForm;
