import './style.scss';
import {GetTheApp} from '../../global_components/containers';
import {WhiteContainerForEmail, SecondWhiteContainer} from './components/WhiteContainers';

const Singin = () => {
  return (
    <>
      <div className="login-or-singin-container">
        <WhiteContainerForEmail/>
        <SecondWhiteContainer/>
        <GetTheApp/>
      </div>
    </>
  )
}

export default Singin;
