import cellphone from '../../../assets/cellphone.png';
import cellphoneBackgroun1 from '../../../assets/cellphone_background1.jpg';
import cellphoneBackgroun2 from '../../../assets/cellphoneBackground2.jpg';
import cellphoneBackgroun3 from '../../../assets/cellphoneBackground3.jpg';
import cellphoneBackgroun4 from '../../../assets/cellphoneBackground4.jpg';
import cellphoneBackgroun5 from '../../../assets/cellphoneBackgroun5.jpg';

var currentImageIndex = 0;

const Cellphone = () => {
  const alt = "it was't possible to load this image";

  return (
    <div id="cellphone-container">
      <img src={cellphone} alt={alt} id="cellphone-image"/>

      <div id="container-of-cellphone-screen-image">
        <img src={cellphoneBackgroun1} alt={alt} style={{opacity:1}}/>
        <img src={cellphoneBackgroun2} alt={alt}/>
        <img src={cellphoneBackgroun3} alt={alt}/>
        <img src={cellphoneBackgroun4} alt={alt}/>
        <img src={cellphoneBackgroun5} alt={alt}/>
      </div>
    </div>
  )
}


function changeCellphoneBackground() {
  const img = document.querySelectorAll("#container-of-cellphone-screen-image img");
  changeImage(img, img.length - 1);
  setNextImage(img.length);
}


function changeImage(img, length) {
  if(currentImageIndex > 0) {
    img[currentImageIndex].style.opacity = "1";
    img[currentImageIndex - 1].style.opacity = "0";
    return;
  }
  img[currentImageIndex].style.opacity = "1";
  img[length].style.opacity = "0";
}


function setNextImage(imageLength) {
  if(currentImageIndex < imageLength) currentImageIndex++;
  if(currentImageIndex >= imageLength) currentImageIndex = 0;
}

setInterval(changeCellphoneBackground, 5000);

export default Cellphone;