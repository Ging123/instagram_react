import {useState} from 'react';
import DefaultInput from '../../../global_components/DefaultInput';

const LoginForm = () => {
  const [nameOrNumber, setNameOrNumber] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="flex-column small-margin-bottom">
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
      <input
        type="submit"
        value="Log in"
        className="main-button"
      />
    </form>
  )
}

export default LoginForm;
