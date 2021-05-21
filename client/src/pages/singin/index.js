import {useState} from 'react';
import './style.scss';
import {GetTheApp} from '../../global_components/containers';
import {WhiteContainerForEmail, SecondWhiteContainer, WhiteContainerForDate} 
from './components/WhiteContainers';

const Singin = () => {
  document.title = "Login • Instagram";
  const [firstFormIsOpen, setFirstFormIsOpen ] = useState(false);

  return (
    <>
      <div className="login-or-singin-container">
        {firstFormIsOpen === true ? 
          (<WhiteContainerForEmail setFirstFormIsOpen={setFirstFormIsOpen}/>):
          (<WhiteContainerForDate setFirstFormIsOpen={setFirstFormIsOpen}/>)
        }
        <SecondWhiteContainer/>
        <GetTheApp/>
      </div>
    </>
  )
}

export default Singin;
