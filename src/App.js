import React, { useState } from 'react';
import Card from './components/Card';
import video from "./assets/arcane-opening.webm";
import audio from "./assets/arcane-opening.mp3";
import image from "./assets/arcane-image-background.jpeg";
import './styles/app.scss';



function App() {

  const [isMuted, setIsMuted] = useState(false);

  const onMute = () => {
    if (document.getElementById("audio").muted === true) {
      document.getElementById("audio").muted = false;
      setIsMuted(false);
    }
    else {
      document.getElementById("audio").muted = true;
      setIsMuted(true);
    }
  }

  return (
    <div>
      <div className={'background'}>
        <video autoPlay loop muted>
          <source src={video} type="video/webm" />
        </video>
        <img className='imageBackground' src={image} alt="Arcane Background" />
        <div className='audio'>
          <audio controls autoPlay={true} loop id='audio'>
            <source src={audio} type="audio/mp3" />
          </audio>
        </div>
        <div className='content'>
          <Card />
          <div
            className='muteIcon'
            onClick={onMute}
            role="button"
            onKeyDown={onMute}
            tabIndex={0}
          >{isMuted ? <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1_58)">
              <path d="M62 39C62 49.4934 53.4934 58 43 58C32.5066 58 24 49.4934 24 39C24 28.5066 32.5066 20 43 20C53.4934 20 62 28.5066 62 39Z" fill="#4649FF" fill-opacity="0.6" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M43 56C52.3888 56 60 48.3888 60 39C60 29.6112 52.3888 22 43 22C33.6112 22 26 29.6112 26 39C26 48.3888 33.6112 56 43 56ZM43 58C53.4934 58 62 49.4934 62 39C62 28.5066 53.4934 20 43 20C32.5066 20 24 28.5066 24 39C24 49.4934 32.5066 58 43 58Z" fill="#4649FF" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M54.7114 35.293C55.1022 35.6833 55.1025 36.3165 54.7122 36.7072L48.7153 42.7104C48.325 43.1011 47.6918 43.1014 47.3011 42.7111C46.9104 42.3208 46.9101 41.6876 47.3004 41.2969L53.2972 35.2937C53.6875 34.903 54.3207 34.9027 54.7114 35.293Z" fill="#C47AFF" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M47.2972 35.2969C47.6875 34.9062 48.3207 34.9058 48.7114 35.2961L54.7146 41.293C55.1053 41.6833 55.1057 42.3165 54.7153 42.7072C54.325 43.0979 53.6918 43.0983 53.3011 42.708L47.298 36.7111C46.9072 36.3208 46.9069 35.6876 47.2972 35.2969Z" fill="#C47AFF" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M42.4353 31.1052C42.7819 31.2715 43.0024 31.6218 43.0026 32.0062L43.01 46.0062C43.0102 46.3906 42.79 46.7411 42.4436 46.9078C42.0973 47.0745 41.686 47.0279 41.3857 46.7879L36.6576 43.0095L33.0084 43.0114C32.4561 43.0117 32.0082 42.5643 32.0079 42.012L32.0047 36.012C32.0044 35.4597 32.4519 35.0117 33.0042 35.0114L36.6534 35.0095L41.3775 31.2262C41.6776 30.9859 42.0888 30.9389 42.4353 31.1052ZM41.0037 34.0879L37.6298 36.7899C37.4526 36.9318 37.2323 37.0092 37.0053 37.0093L34.0053 37.0109L34.0074 41.0109L37.0074 41.0093C37.2344 41.0092 37.4548 41.0864 37.6322 41.2281L41.0089 43.9266L41.0037 34.0879Z" fill="#C47AFF" />
            </g>
            <defs>
              <filter id="filter0_d_1_58" x="0" y="0" width="86" height="86" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="12" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.27451 0 0 0 0 0.286275 0 0 0 0 1 0 0 0 0.8 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_58" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_58" result="shape" />
              </filter>
            </defs>
          </svg> : <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1_57)">
              <path d="M62 39C62 49.4934 53.4934 58 43 58C32.5066 58 24 49.4934 24 39C24 28.5066 32.5066 20 43 20C53.4934 20 62 28.5066 62 39Z" fill="#4649FF" fill-opacity="0.6" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M43 56C52.3888 56 60 48.3888 60 39C60 29.6112 52.3888 22 43 22C33.6112 22 26 29.6112 26 39C26 48.3888 33.6112 56 43 56ZM43 58C53.4934 58 62 49.4934 62 39C62 28.5066 53.4934 20 43 20C32.5066 20 24 28.5066 24 39C24 49.4934 32.5066 58 43 58Z" fill="#4649FF" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M42.9258 31.0926C43.2724 31.259 43.4929 31.6092 43.4931 31.9936L43.5005 45.9936C43.5007 46.378 43.2805 46.7285 42.9341 46.8952C42.5878 47.0619 42.1765 47.0153 41.8762 46.7753L37.1481 42.997L33.4989 42.9989C32.9466 42.9992 32.4987 42.5517 32.4984 41.9994L32.4952 35.9994C32.4949 35.4471 32.9424 34.9992 33.4947 34.9989L37.1439 34.997L41.868 31.2136C42.1681 30.9733 42.5793 30.9263 42.9258 31.0926ZM41.4942 34.0753L38.1203 36.7773C37.9431 36.9193 37.7228 36.9967 37.4957 36.9968L34.4957 36.9983L34.4978 40.9983L37.4978 40.9968C37.7249 40.9967 37.9453 41.0738 38.1227 41.2156L41.4994 43.914L41.4942 34.0753Z" fill="#C47AFF" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M49.8557 31.2131C50.2461 30.8225 50.8793 30.8222 51.2699 31.2126C53.3332 33.2743 54.4931 36.0711 54.4947 38.9879C54.4962 41.9047 53.3392 44.7027 51.2781 46.7666C50.8878 47.1574 50.2547 47.1578 49.8639 46.7676C49.4731 46.3773 49.4727 45.7441 49.8629 45.3534C51.5493 43.6647 52.4959 41.3754 52.4947 38.989C52.4934 36.6025 51.5444 34.3142 49.8562 32.6274C49.4656 32.237 49.4653 31.6038 49.8557 31.2131ZM46.3276 34.745C46.7179 34.3543 47.3511 34.3541 47.7418 34.7445C48.8672 35.869 49.4999 37.3946 49.5007 38.9855C49.5016 40.5765 48.8705 42.1027 47.7462 43.2285C47.356 43.6193 46.7228 43.6197 46.332 43.2294C45.9412 42.8392 45.9408 42.206 46.3311 41.8152C47.0806 41.0647 47.5013 40.0472 47.5007 38.9866C47.5002 37.9259 47.0784 36.9089 46.3281 36.1592C45.9374 35.7688 45.9372 35.1357 46.3276 34.745Z" fill="#C47AFF" />
            </g>
            <defs>
              <filter id="filter0_d_1_57" x="0" y="0" width="86" height="86" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="12" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.27451 0 0 0 0 0.286275 0 0 0 0 1 0 0 0 0.8 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_57" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_57" result="shape" />
              </filter>
            </defs>
          </svg>
            }
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
