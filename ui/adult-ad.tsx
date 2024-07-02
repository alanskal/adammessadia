/* eslint-disable @next/next/no-img-element */
'use client'

// components/AdultAd.js

import { useState, useEffect } from 'react';
import Draggable from "react-draggable";
import Image from 'next/image'

interface AdultAdProps {
  id: number;
  timeOut: number;
  link: string;
  height: number;
  width: number;
}

const AdultAd: React.FC<AdultAdProps> = ({id, link, timeOut, height, width }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, timeOut);

    // Nettoyer le timer lorsque le composant est démonté
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

  const RandomPosition = () => {
    const randomTop = Math.random() * 500 + 'px';
    const randomLeft = Math.random() * 600 + 'px';
    const randomPosition = { top: randomTop, left: randomLeft };
    return randomPosition;
  };

  return (
    <>
      {isVisible && (
        <Draggable>
          <div className={`mac-popup-${id}`} style={RandomPosition()}>
            <div className="mac-popup-header">
              <div className="mac-popup-buttons">
                <div className="mac-popup-button close" onClick={handleClose}></div>
                <div className="mac-popup-button minimize"></div>
                <div className="mac-popup-button zoom"></div>
              </div>
              <div className="mac-popup-title">ADAM MESSAADIA</div>
            </div>
            <div className="mac-popup-content">
              <div></div>
              <Image unoptimized
              alt='gif'
              src={link}
              height={height}
              width={width}
              />

            </div>
          </div>
        </Draggable>
      )}
    </>
  );
};

export default AdultAd;
