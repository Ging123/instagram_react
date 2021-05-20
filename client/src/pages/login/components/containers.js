import React from 'react';
import '../../../global_css/containers.scss';
import appStoreImg from '../../../assets/app-store.png';
import googlePlayImg from '../../../assets/google-play.png';

const altMensage = "it wasn't possible to load this image";

const Or = ({className}) => {
  return (
    <div className={`or-and-line-container ${className}`}>
      <div className="line"/>
      <span>OR</span>
      <div className="line"/>
    </div>
  )
}

Or.defaultProps = { className:"" }


const GetTheApp = ({className}) => {
  const linkToAppStore = "https://apps.apple.com/app/instagram/id389801252?vt=lo";
  const linkToGooglePlay = "https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D3831F102-0B1F-465C-8CA3-E8850EEF410A%26utm_content%3Dlo%26utm_medium%3Dbadge";

  return (
    <div className={`get-the-app-container ${className}`}>
      <div className="text-align-center margin-bottom">Get the app.</div>
      <div className="text-align-center">
        <a href={linkToAppStore}>
          <img src={appStoreImg} alt={altMensage} className="store-image"/>
        </a>
        <a href={linkToGooglePlay}>
          <img src={googlePlayImg} alt={altMensage} className="store-image"/>
        </a>
      </div>
    </div>
  )
}

GetTheApp.defaultProps = { className:"" }

export {Or, GetTheApp};