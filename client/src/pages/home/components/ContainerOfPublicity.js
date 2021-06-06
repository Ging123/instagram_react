import publicity from '../../../assets/publicity.jpg';
import {GetTheApp} from '../../../global_components/containers';

const ContainerOfPublicity = () => {
  const alt = "it was't possible to load this image";

  return (
    <div className="container-of-publicity">
      <img src={publicity} alt={alt} className="publicity-pic"/>
      <div>
        <div>
          <div className="bold">Start capturing and sharing your moments.</div>
          <div>Get the app to share your first photo or video.</div>
          <GetTheApp/>
        </div>
      </div>
    </div>
  )
}

export default ContainerOfPublicity;