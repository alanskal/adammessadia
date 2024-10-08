/* eslint-disable @next/next/no-img-element */
'use client'

import { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

interface AdultAdProps {
  id: number;
  timeOut: number;
  link: string;
  height: number;
  width: number;
  unoptimized?: boolean;
}

const AdultAd: React.FC<AdultAdProps> = ({ id, link, timeOut, height, width }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, timeOut);

    return () => clearTimeout(timer);
  }, [timeOut]);

  const mobileDisplay = useMediaQuery({ query: '(max-width: 768px)' });

  const RandomPosition = () => {
    const randomTop = mobileDisplay ? Math.random() * 60 + 'vh' : Math.random() * 90 + 'vh';
    const randomLeft = mobileDisplay ? '25vh' : Math.random() * 90 + 'vh';
    return { top: randomTop, left: randomLeft };
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const onTouchClose = () => {
    handleClose();
  };

  const handleGlobalClose = () => {
    const allPopups = document.querySelectorAll('.closeAll');
    allPopups.forEach((popup) => {
      popup.classList.add('d-none');
    });
  };

  const PopupContent = (
    <div className={`mac-popup-${id} closeAll`} style={RandomPosition()}>
      <div className="mac-popup-header">
        <div className={mobileDisplay ? 'd.none' : 'mac-popup-buttons'}>
          <div className={mobileDisplay ? 'd.none' : 'mac-popup-button close'} onClick={handleClose}></div>
          <div className={mobileDisplay ? 'd.none' : 'mac-popup-button minimize'} onClick={handleGlobalClose}></div>
          {/* <div className="mac-popup-button zoom"></div> */}
        </div>
        <div className="mac-popup-title">ADAM MESSAADIA</div>
      </div>
      <div className="mac-popup-content" onClick={handleClose} onTouchEnd={onTouchClose}>


        <Image
          unoptimized
          alt="gif"
          src={link}
          height={height}
          width={width}
          className="ad-mobile"
          id="ad-mobile"
        />

      </div>
    </div>
  );

  return (
    <>
      {isVisible && (mobileDisplay ? PopupContent : <Draggable>{PopupContent}</Draggable>)}
    </>
  );
};

export default AdultAd;
