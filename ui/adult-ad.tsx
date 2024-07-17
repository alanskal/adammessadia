
'use client'

// components/AdultAd.js

import { useState, useEffect } from 'react';
import Draggable from "react-draggable";
import Image from 'next/image'
import { useMediaQuery } from '@mui/material';

interface AdultAdProps {
  id: number;
  timeOut: number;
  link: string;
  height: number;
  width: number;
}

const AdultAd: React.FC<AdultAdProps> = ({id, link, timeOut, height, width }) => {
  const [isVisible, setIsVisible] = useState(false);

  const isMobile = useMediaQuery('(max-width:600px)')

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, timeOut);


    return () => clearTimeout(timer);
  }, [timeOut]);

  useEffect(() => {
    if (isVisible) {
      RandomPosition();
    }
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleGlobalClose = () => {
    const allPopups = document.querySelectorAll('.closeAll');
    allPopups.forEach((popup) => {
      popup.classList.add('d-none')
    });
  };

  const RandomPosition = () => {
    const randomTop = Math.random() * 80 + 'vh';
    const randomLeft = isMobile ? '15vw' : (Math.random() * 80 + 'vw');
    const randomPosition = {
      top: randomTop,
      left: randomLeft
      };
    return randomPosition;
  };



  return (
    <>
      {isVisible && (
        <Draggable>
          <div className={`mac-popup-${id} closeAll`} style={RandomPosition()}>
            <div className="mac-popup-header" {...(isMobile) && { onClick : handleClose }} >
              <div className="mac-popup-buttons">
                <div className="mac-popup-button close" onClick={handleClose}></div>
                <div className="mac-popup-button minimize" onClick={handleGlobalClose}></div>
                {/* <div className="mac-popup-button zoom"></div> */}
              </div>
              <div className="mac-popup-title">ADAM MESSAADIA</div>
            </div>
            <div className="mac-popup-content">

              <Image unoptimized
              alt='gif'
              src={link}
              height={height}
              width={width}
              {...(isMobile) && {onClick : handleClose} }

              />
            </div>
          </div>

        </Draggable>
      )}
    </>
  );
};

export default AdultAd;
